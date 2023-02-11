import React from "react";
import { useHistory } from "react-router-dom";
import Cards from "./Cards";
import Footer from "./Footer";
import Header from "./Header";
import "./Home.css";

function Home() {
  const history=useHistory();
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
              onClick={()=>history.push("/register")}
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
          Registration Ends On <span>1st March</span>
        </p>
      </div>

      {/* TECHNOBLAZE */}

      <div className="technoblaze">
        <div className="technoblaze__title">
          <p>TECHNOBLAZE 22.0</p>
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
            <Cards name={"Code Cracking"} url={"assets/1.jpg"} />
            <Cards name={"Emerging Engineer"} url={"assets/2.jpg"} />
            <Cards name={"Surveyor"} url={"assets/3.jpg"} />
            <Cards name={"Quiz"} url={"assets/4.jpg"} />
            <Cards name={"Working Model"} url={"assets/5.jpg"} />
            <Cards name={"PowerPoint Presentation"} url={"assets/6.jpg"} />
            <Cards name={"Poster Making"} url={"assets/7.jpg"} />
            <Cards name={"CAD Modelling"} url={"assets/8.jpg"} />
            <Cards name={"Prime Architect"} url={"assets/9.jpg"} />
          </div>
        </div>
      </div>


      <div className="nontechnical">
        <div className="nontechnical__title">
          <p>Non-Technical</p>
        </div>
        <div className="nontechnical__data">
          <Cards name={"Photography"} url={"assets/11.jpg"} />
          <Cards name={"Meme Creation"} url={"assets/12.jpg"} />
          <Cards name={"Treasure Hunt"} url={"assets/13.jpg"} />
          <Cards name={"Rolling Sir"} url={"assets/14.jpg"} />
          <Cards name={"Wall Painting"} url={"assets/15.jpg"} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
