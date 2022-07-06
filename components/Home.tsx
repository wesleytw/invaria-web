import cover from '@/assets/cover.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>
        <img className="h-full" src={cover} alt="Logo" />
        {/* <Discord /> */}
        {/* <p className="absolute text-purple-200">Explore Cryptic Desert on Next-Gen</p> */}
        <div className="container">
          <p className="text-6xl text-center">InVar TERMS & CONDITIONS</p>
          <p className=""></p>
          <Link to="/terms">
            <p className="text-white">© 2022 InVaria 2222  I  Terms & Conditions  Privacy Policy</p>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Home;