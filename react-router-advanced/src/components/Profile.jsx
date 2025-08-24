import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => (
  <div className="p-4 border rounded">
    <h2 className="text-xl font-bold mb-2">Profile Page</h2>
    <nav className="space-x-4 mb-4">
      <Link to="details" className="text-blue-500">Details</Link>
      <Link to="settings" className="text-blue-500">Settings</Link>
    </nav>

    {/* Nested routes defined here */}
    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
  </div>
);

export default Profile;
