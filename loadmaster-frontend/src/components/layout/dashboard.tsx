import type { ReactNode } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={styles.container}>
      <Sidebar />

      <div style={styles.main}>
        <Navbar />
        <div style={styles.content}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex"
  },
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const
  },
  content: {
    padding: "20px"
  }
};
