import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import getData, { getRoomData } from "../../api/getData.API";

const Charts = ({ metric, room }) => {
  const [data, setData] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const fill = ["#26BAFF", "#FF6698", "#AA72C1", "#26D048"];

  useEffect(() => {
    if (metric) {
      getData(metric)
        .then((res) => {
          setData(res.data.data);
          setRooms(res.data.rooms);
        })
        .catch((e) => console.log(e));
    } else {
      getRoomData(room)
        .then((res) => {
          setData(res.data.data);
          setMetrics(res.data.metric);
        })
        .catch((e) => console.log(e));
    }
  }, [metric, room]);

  return (
    <div className="charts">
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 25,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis label={{ value: "Occurances", angle: -90, position: "left" }} />
        <Tooltip />
        <Legend verticalAlign="bottom" />
        {rooms?.map((item, index) => (
          <Bar
            key={index}
            dataKey={item}
            stackId="a"
            fill={fill[index]}
            barSize={30}
          />
        ))}
        {metrics?.map((item, index) => (
          <Bar
            key={index}
            dataKey={item}
            stackId="a"
            fill={fill[index]}
            barSize={30}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default Charts;
