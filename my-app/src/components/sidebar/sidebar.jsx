import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from '@mui/icons-material/Summarize';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Salesmen Manager</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/customers" style={{ textDecoration: "none" }}>
            <li>
              <PeopleIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <li>
              <SummarizeIcon className="icon" />
              <span>Reports</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
          <li>
            <CalendarMonthIcon className="icon" />
            <span>Calender</span>
          </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
