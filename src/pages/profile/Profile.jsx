import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"
import { Link } from "react-router-dom";
import mobin1 from "../../assets/mobin1.jpg"
import cover from "../../assets/cover.jpg"


const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src={cover}
          alt="Mobin's Cover Picture"
          className="cover"
        />
        <img
          src={mobin1}
          alt="Mobin's Profile Picture"
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a style={{marginLeft: '5em'}} href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            {/* <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a> */}
            {/* <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a> */}
            <a href="https://www.linkedin.com/in/mobinakhter/">
              <LinkedInIcon fontSize="large" />
            </a>
            
          </div>
          <div className="center">
            <span>Mobin</span>
            <div className="info">
              <div className="item">
                {/* <PlaceIcon style={{fontSize: '2rem'}} /> */}
                {/* <span >CAN</span> */}
              </div>
              <div style={{marginRight: '2.5rem'}} className="item">
                <Link to="https://mobin-akhter.netlify.app/">Portfolio</Link>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;