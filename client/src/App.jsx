import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

function App() {
  const navigate = useNavigate();

  // Check if the user is authenticated
  const isAuthenticated = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-5">
      <nav className="flex gap-4 mb-5">
        <Link to="/" className="text-blue-500">
          Tasks
        </Link>
        {!isAuthenticated ? (
          <>
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </>
        ) : (
          <button onClick={logout} className="text-red-500">
            Logout
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={isAuthenticated ? <Tasks /> : <Login />} />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Tasks />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Tasks />}
        />
      </Routes>
    </div>
  );
}

export default App;
