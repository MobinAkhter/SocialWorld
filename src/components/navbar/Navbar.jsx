import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import mobin1 from "../../assets/mobin1.jpg";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>SocialWorld</span>
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: 'inherit' }}>
          <HomeOutlinedIcon />
        </Link>
        
        {darkMode ? (
          <WbSunnyOutlinedIcon style={{ cursor: "pointer"}} onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon style={{ cursor: "pointer"}} onClick={toggle} />
        )}
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsOutlinedIcon />
        <Link style={{textDecoration: 'none', color: 'inherit'}} to="profile/1">
        <div className="user">
          <img
            src={mobin1}
            alt=""
          />
          <span>{currentUser.name}</span>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;