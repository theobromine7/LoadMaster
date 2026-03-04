export default function Navbar() {
  return (
    <div style={styles.navbar}>
      <h3>Dashboard</h3>
    </div>
  );
}

const styles = {
  navbar: {
    height: "60px",
    background: "#f3f4f6",
    padding: "15px",
    borderBottom: "1px solid #ddd"
  }
};
