import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <span>Ozge Torer</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.ac003ad9da525480b736399f0c8bb046?rik=Ne%2fjO%2bGm3dABTg&riu=http%3a%2f%2fwww.turktime.com%2fhaber_resim%2filayda-alisan60EAS_tepe.jpg&ehk=Rc%2fQLKIHBy3Lthh0bdxRBu2z24spcZ2r1BXcKpKWlVg%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
              <span>Ilayda Alisan</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <p>
                <span>Ozge Torer</span> changed her cover picture
              </p>
            </div>
            <span style={{ marginLeft: '3em' }}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <p>
                <span>Ozge Torer</span> wrote a comment on your picture
              </p>
            </div>
            <span>3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <p>
                <span>Ozge Torer</span> liked your pricture
              </p>
            </div>
            <span style={{ marginLeft: '2em' }}>10 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <p>
                <span>Ozge Torer</span> changed her picture
              </p>
            </div>
            <span style={{ marginLeft: '2em' }}>15 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://th.bing.com/th/id/R.8fe0a7849f13c96e2941fca9ddf3b096?rik=lp7mD1nmSkEveQ&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="online" />
              <span>Ozge Torer</span>
            </div>
          </div>
          </div>
          {/* <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightBar;