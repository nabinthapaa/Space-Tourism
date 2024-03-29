import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import styles from "../css/Component.module.css";

const HomeScreen = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    root.setAttribute("class", "home");
  }, []);

  return (
      <main className="grid-container grid-container--home">
        <div>
          <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
            So, you want to travel to{" "}
            <span className="ff-serif fs-900 text-white d-block">Space</span>
          </h1>

          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience! Explore &copy;
          </p>
        </div>
        <div>
          <Link
            to="/destination"
            className={`largeButton uppercase ff-serif text-dark bg-white`}
          >
            Explore
          </Link>
        </div>
      </main>
  );
};

export default HomeScreen;
