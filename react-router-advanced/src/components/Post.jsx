import { useParams } from "react-router-dom";

const Post = () => {
  const { postId } = useParams();
  return <p>This is post #{postId}</p>;
};

export default Post;
