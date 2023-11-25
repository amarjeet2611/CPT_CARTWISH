import { Link } from "react-router-dom";

//*style
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-info">
        <div className="home-info-text">
          <span></span>
          <h2></h2>
          <p></p>
        

          <Link to="/shop">
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
