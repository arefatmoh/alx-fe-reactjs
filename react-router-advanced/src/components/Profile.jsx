import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div className="p-4 border rounded">
    <h2 className="text-xl font-bold mb-2">Profile Page</h2>
    <nav className="space-x-4 mb-4">
      <Link to="details" className="text-blue-500">Details</Link>
      <Link to="settings" className="text-blue-500">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

export default Profile;
