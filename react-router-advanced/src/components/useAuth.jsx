// src/components/useAuth.jsx
import { useState } from "react";

const useAuth = () => {
  // Simulate authentication state
  const [isAuthenticated] = useState(true);
  return { isAuthenticated };
};

export default useAuth;
