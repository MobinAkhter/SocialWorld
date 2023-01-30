import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Alparslan",
      userId: 1,
      profilePic:
        "https://th.bing.com/th/id/R.8eb441bd9d9ceb4695455d0167d3ce5c?rik=NCzjEWXqKi0I2w&pid=ImgRaw&r=0",
      desc: "On the set of Alparslan Buyuk Selcukulu (Watch it on https://kayifamilytv.com/v11/alparslan-buyuk-selcuklu-episode-1/)",
      img: "https://th.bing.com/th/id/OIP.1qwZKBJhDJru8aFWcjs97wHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 2,
      name: "Yinal Bey",
      userId: 2,
      profilePic:
        "https://th.bing.com/th/id/OIP.UPAtbjBRnWJ7EJKBo3K0ygHaEJ?pid=ImgDet&rs=1",
      desc: "I am the best actor in the show. Who says no?",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;