import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <p>This is blog post #{id}</p>;
};

export default BlogPost;
