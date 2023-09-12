import React from "react";
// import { RiProductHuntLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from "../../components/protect/HiddenLink";

const Home = () => {
  return (
    <div className="home">
      <nav className="container --flex-between ">
        <div className="logo1 ">
          <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Heritage_Institute_of_Kolkata_Logo.png"></img>
        </div>

        <ul className="home-links">
          <ShowOnLogout>
            <li>
              <Link to="/register">
                <h4 style={{ color: "black" }}>Register</h4>
              </Link>
            </li>
          </ShowOnLogout>
          <ShowOnLogout>
            <li>
              <button className="--btn --btn-success">
                <Link to="/login">
                  <h4 style={{ color: "white", paddingTop: "0.4em" }}>Login</h4>
                </Link>
              </button>
            </li>
          </ShowOnLogout>
          <ShowOnLogin>
            <li>
              <button className="--btn --btn-primary">
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </li>
          </ShowOnLogin>
        </ul>
      </nav>
      {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2
            style={{
              color: "black",
              background: "linear-gradient(to left, rgba(0, 0, 0, 0),  rgb(222, 255, 102))",
              padding: "1em",
              borderRadius: "2rem",
            }}
          >
            {" "}
            HITK Inventory {"&"} Stock Management Solution
          </h2>
          <p style={{
              color: "black",
              background: "linear-gradient(to left, rgba(0, 0, 0, 0),  rgb(222, 255, 102))",
              padding: "1em",
              
            }}>
            <div>
              <h4 >
                HITK Inventory system to control and manage proucts in the
                warehouse in real timeand integrated to make it easier to
                develop your business.
              </h4>
            </div>
            <br></br>
            <br></br>
            <div className="">
            </div>
          </p>
          {/* <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Free Trial 1 Month</Link>
            </button>
          </div> */}
          {/* <div className="--flex-start">
            <NumberText num="14K" text="Brand Owners" />
            <NumberText num="23K" text="Active Users" />
            <NumberText num="500+" text="Partners" />
          </div> */}
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  );
};

const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;
