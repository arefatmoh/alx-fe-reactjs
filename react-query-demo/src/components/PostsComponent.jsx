import { useQuery } from "react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60, // cache for 1 minute
  });

  if (isLoading) {
    return <p className="text-center">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Refetch Posts
      </button>
      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-3 border rounded bg-white shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
