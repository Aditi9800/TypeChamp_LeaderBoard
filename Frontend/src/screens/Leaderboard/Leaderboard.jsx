import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../assets/API/API_URL";
import Navbar from "../../components/Navbar/Navbar";
// import Card from "../components/Card";
// import Single from "./Single";
// import { Link } from "react-router-dom";
import './Leaderboard.css';
export default function Leaderboard() {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const scores = await axios.get(API_URL+"/scores/leaderboard");
      setScore(scores.data);
    };
    loadData();
  }, []);


  return (
    <div>
      <div>
        {" "}
        <Navbar />
      </div>
      <div>
        <div className="LeaderboardTable">
          <table>
          <tr>
              <th>Email</th>
              <th>Speed</th>
          </tr>
          {
              score.map((data)=>{
              return ( 
              <tr>
                  <td>{data.username}</td>
                  <td>{data.score}</td>
              </tr>
              )})
          }
          </table>
        </div>
    </div>
  </div>
  );
}
