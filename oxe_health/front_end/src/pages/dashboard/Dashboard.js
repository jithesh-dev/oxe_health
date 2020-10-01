import React, { useState } from "react";
import Charts from "../../components/Charts/Charts";
import "./Dashboard.css";

const Dashboard = () => {
  const [metric, setMetric] = useState("system:restart");
  const [room, setRoom] = useState("room01");

  return (
    <div className="dashboard">
      <div className="dashboard__container container">
        <h1>Dashboard</h1>
        <div className="dashboard__row">
          <div className="dashboard__card">
            <h3 className="dashboard__cardTitle">Metric Stats</h3>
            <p className="dashboard__inputLabel">Select Metric</p>
            <select
              className="dashboard__selectMetric"
              name="metric"
              onChange={(e) => setMetric(e.target.value)}
            >
              <option selected value="system:restart">
                system:restart
              </option>
              <option value="gui:report:viewed">gui:report:viewed</option>
              <option value="gui:alert:shown">gui:alert:shown</option>
              <option value="gui:client:connected">gui:client:connected</option>
            </select>
            <Charts metric={metric} />
          </div>
          <div className="dashboard__card">
            <h3 className="dashboard__cardTitle">Room Stats</h3>
            <p className="dashboard__inputLabel">Select Room</p>
            <select
              className="dashboard__selectMetric"
              name="room"
              onChange={(e) => setRoom(e.target.value)}
            >
              <option selected value="room01">
                room01
              </option>
              <option value="room02">room02</option>
              <option value="room03">room03</option>
              <option value="room04">room04</option>
            </select>
            <Charts room={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
