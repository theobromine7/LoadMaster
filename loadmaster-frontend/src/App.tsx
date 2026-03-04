import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import CreateTruck from "./pages/CreateTruck";
import CreateLoad from "./pages/CreateLoad";

import DashboardLayout from "./components/layout/dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/truck/create"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CreateTruck />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/load/create"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CreateLoad />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
