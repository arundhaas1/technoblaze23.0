import React from "react";
import Countdown from "react-countdown";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

function Home() {
  const history = useHistory();
  return (
    <div className="home">
      <Header />
      <div className="home__info" style={{ color: "white" }}>
        <h4>GOVERNMENT COLLEGE OF ENGINEERING, SALEM-11.</h4>
        <h5 className="">DEPARTMENT OF CIVIL ENGINEERING</h5>
        <div className="info__logos">
          <img
            className="remove"
            alt=""
            src="assets/techlogo.png"
            style={{ height: "150px", width: "150px" }}
          />
          <div className="info__button">
            <p>TECHNOBLAZE 23.0</p>
            <button
              style={{ textDecoration: "none", color: "white" }}
              onClick={() => history.push("/register")}
            >
              Register Now
            </button>
          </div>
          <img
            className="remove1"
            alt=""
            src="assets/gcesalem.png"
            style={{ height: "170px", width: "170px" }}
          />
        </div>
        <p>
          Registration Ends On <span>27th February</span>
        </p>
        <p class name="ps">
          Paper submission Ends On <span>28th February</span>
        </p>
        <Countdown className="countdown" date={(1676633222001 + 880160000 )}>
          <span className="countdown__span">
            Sorry ! The registration deadline for the events was February 27th . 
          </span>
        </Countdown>
      </div>

      {/* TECHNOBLAZE */}

      <div className="technoblaze">
        <div className="technoblaze__title">
          <p>TECHNOBLAZE 23.0</p>
        </div>
        <p>
          Technoblaze 23.0 is an inter college technical and non- technical
          carnival which is organised by the Society for the Advancement of
          Civil Engineering of Government College of Engineering, Salem. It
          takes you on a complete ride to technical extravaganza. It provides
          the perfect platform to expose the technical acumen and compete with
          peers from various institutes. Above all technoblaze serves well in
          synchronizing the energy of civil engineers to light up the world. The
          destined date is March 1 & 2. We invite the students from various
          colleges to expose their skills.
        </p>
      </div>

      <div className="technical">
        <div className="technical__title">
          <p>Technical</p>
          <div className="technical__list">
            <Cards name={"Code Cracking"} url={"assets/1-min.jpg"} />
            <Cards name={"Surveyor"} url={"assets/3-min.jpg"} />
            <Cards name={"Quiz"} url={"assets/4-min.jpg"} />
            <Cards name={"PowerPoint Presentation"} url={"assets/6-min.jpg"} />
            <Cards name={"CAD Modelling"} url={"assets/8-min.jpg"} />
            <Cards name={"Prime Architect"} url={"assets/9-min.jpg"} />
          </div>
        </div>
      </div>

      <div className="nontechnical">
        <div className="nontechnical__title">
          <p>Non-Technical</p>
        </div>
        <div className="nontechnical__data">
          <Cards name={"Photography"} url={"assets/11-min.jpg"} />
          <Cards name={"Meme Creation"} url={"assets/12-min.jpg"} />
          <Cards name={"Treasure Hunt"} url={"assets/13-min.jpg"} />
          <Cards name={"Rolling Sir"} url={"assets/14-min.jpg"} />
          <Cards name={"Paint Genix"} url={"assets/15-min.jpg"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
