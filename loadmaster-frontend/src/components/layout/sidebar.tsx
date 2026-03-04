import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.sidebar}>
      <h2>LoadMaster 🚚</h2>

      <nav style={styles.nav}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/truck/create">Create Truck</Link>
        <Link to="/load/create">Create Load</Link>
        <Link to="/loads">My Loads</Link>
      </nav>

      <button onClick={logout} style={styles.logout}>
        Logout
      </button>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "220px",
    height: "100vh",
    background: "#111827",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between"
  },
  nav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    marginTop: "30px"
  },
  logout: {
    marginTop: "auto",
    padding: "10px",
    cursor: "pointer"
  }
};
