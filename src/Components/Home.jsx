import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <h1 className="home-title">Notebook Commerce</h1>
      <p className="home-text">
        The computer you are looking for at the best price. We are market
        leaders, our products cover all needs.
      </p>
      <p className="home-text">To find out what we offer enter the store!</p>

      <Link className="home-button" to="/products">Shop</Link>
    </main>
  );
};

export default Home;
