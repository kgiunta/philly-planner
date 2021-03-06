import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../../utils/queries";
import {
  useNavigate,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import Auth from "../../utils/auth";

function Home() {
  const navigate = useNavigate();
  //   const [value, onChange] = useState(new Date());
  // navigate("/");
  const location = useLocation();
  const name = location.state.name;
  const { loading, data } = useQuery(QUERY_USER, {
    // pass URL parameter
    variables: { name: name },
  });

  const user = data?.user || {};
  console.log(user);
  const outingCreator = user.name;
  function handleClick(e) {
    e.preventDefault();
    console.log(outingCreator);
    navigate("/create", { state: { outingCreator } });
  }
  // if (!Auth.loggedIn()) {
  //   return <Navigate to="/signup" />;
  // }
  return (
    <div>
      <motion.div
        // className="displayCards"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        exit={{ y: 250 }}
        //   transition={{ type: "spring", stiffness: 100 }}
        style={{
          backgroundColor: "rgba(127, 131, 137, 0.6)",
          borderRadius: "25px",
        }}
      >
        <h1
          className="text-center"
          style={{ color: "white", textShadow: "-1px -1px 0 #000" }}
        >
          Welcome to Philly Planner
        </h1>
        <p style={{ fontWeight: "bolder" }}>
          {" "}
          We know it's over whelming to plan a night out in a city with so many
          options. Let us take the guess work out. Follow our simple prompts{" "}
        </p>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, transition: 3.0 }}
        onClick={(e) => handleClick(e)}
        className="homeBtn btn btn-block btn-primary"
        style={{ justifyContent: "center" }}
      >
        Let's Get Started!
      </motion.button>
    </div>
  );
}

export default Home;
