import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./files/Home";
import Login from "./files/Login";
import MainOne from "./files/MainOne";
import Explore from "./files/Explore";
import ExploreM from "./files/ExploreM";
import ExploreN from "./files/ExploreN";
import ExploreO from "./files/ExploreO";
import Category from "./files/Category";
import Users from "./files/Users";
import Food from "./files/Food";
import Attractions from "./files/Attractions";
import Shopping from "./files/Shopping";
import Nightlife from "./files/Nightlife";
import Account from "./files/Account";
import Recommend from "./files/Recommend";
import Signup1 from "./files/SignUp1";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main1" element={<MainOne />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explorem" element={<ExploreM />} />
          <Route path="/exploren" element={<ExploreN />} />
          <Route path="/exploreo" element={<ExploreO />} />
          <Route path="/category" element={<Category />} />
          <Route path="/users" element={<Users />} />
          <Route path="/food" element={<Food />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/nl" element={<Nightlife />} />
          <Route path="/account" element={<Account/>} />
          <Route path="/recommend" element={<Recommend/>} />
          <Route path="/signup" element={<Signup1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

