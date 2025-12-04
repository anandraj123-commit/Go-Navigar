"use client";
import '../styles/sidebar.scss';
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">CORONA</div>

      <div className="profile">
        <img src="https://i.pravatar.cc/50?img=12" />
        <span>Gold Member</span>
      </div>

      <ul>
        <li className="active">
          <div className="left">
            <i className="material-icons-outlined">dashboard</i> Dashboard
          </div>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">widgets</i> Widgets
          </div>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">apps</i> Apps
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">layers</i> Basic UI Elements
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">auto_fix_high</i> Advanced UI
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">bar_chart</i> Charts
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">map</i> Maps
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">table_chart</i> Tables
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">person</i> User Pages
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">error</i> Error Pages
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">description</i> General Pages
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">open_in_new</i> Popups
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>

        <li>
          <div className="left">
            <i className="material-icons-outlined">notifications</i> Notifications
          </div>
          <i className="material-icons-outlined">expand_more</i>
        </li>
      </ul>
    </aside>
  );
}

