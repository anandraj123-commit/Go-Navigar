"use client";
import '../styles/header.scss';
export default function Header() {
  return (
    <header className="main-header">
      <div className="d-flex align-items-center">
        <i className="material-icons-outlined me-3">menu</i>

        <div className="search-box">
          <input type="text" placeholder="Search products" />
        </div>
      </div>

      <div className="header-right">
        <button className="btn btn-success">+ Create New Project</button>

        <i className="material-icons-outlined">grid_view</i>
        <i className="material-icons-outlined">notifications</i>

        <img src="https://i.pravatar.cc/50?img=3" />
        <span style={{ color: "white" }}>Henry Klein</span>
        <i className="material-icons-outlined" style={{ color: "white" }}>
          expand_more
        </i>
      </div>
    </header>
  );
}
