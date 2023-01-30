import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";
import mobin1 from "../../assets/mobin1.jpg";
const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "No",
      name: "Evdokya",
      userId: 1,
      profilePicture:
        "https://th.bing.com/th/id/R.bffc3732d49f8fa06aaf8fa07aaf1cb8?rik=E7uut17QBF0eZQ&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      desc: "Great!",
      name: "Cagri Bey",
      userId: 2,
      profilePicture:
        "https://th.bing.com/th/id/R.c301ca82fde272820f2a0f9d8d456254?rik=QZpSlHV2RCO3ww&pid=ImgRaw&r=0",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={mobin1} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;