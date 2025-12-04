export default function AdminLayout({ children }) {
    return (
      <div style={{ display: "flex" }}>
        
        {/* Sidebar */}
        <aside style={{ width: "250px", background: "#222", color: "#fff", height: "100vh", padding: "20px" }}>
          <h2>Admin Menu</h2>
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Vendors</li>
            <li>Settings</li>
          </ul>
        </aside>
  
        {/* Main Area */}
        <main style={{ flexGrow: 1, padding: "20px" }}>
          {children}
        </main>
  
      </div>
    );
  }
  