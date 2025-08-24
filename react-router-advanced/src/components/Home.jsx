import { Link } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Home Page</h1>
    <nav className="space-x-4">
      <Link to="/profile/details" className="text-blue-500">Profile Details</Link>
      <Link to="/profile/settings" className="text-blue-500">Profile Settings</Link>
      <Link to="/post/1" className="text-blue-500">Post 1</Link>
    </nav>
  </div>
);

export default Home;
