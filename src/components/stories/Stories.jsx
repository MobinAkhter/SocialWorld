import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import mobin1 from "../../assets/mobin1.jpg";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Alparslan",
      img: "https://th.bing.com/th/id/R.8eb441bd9d9ceb4695455d0167d3ce5c?rik=NCzjEWXqKi0I2w&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Yinal",
      img: "https://th.bing.com/th/id/OIP.UPAtbjBRnWJ7EJKBo3K0ygHaEJ?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      name: "Seferriye",
      img: "https://th.bing.com/th/id/OIP.jQFuUc7wT-Uhm4euel283QHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 4,
      name: "Grigor",
      img: "https://th.bing.com/th/id/OIP.utzWRafcyFtSJY0cGc6mRAHaEK?pid=ImgDet&rs=1",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={mobin1} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories