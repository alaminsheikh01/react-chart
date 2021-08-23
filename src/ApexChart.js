import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { auth, db } from "./firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const ApexChart = () => {
  const [dataPoint, setDataPoint] = useState([]);
  const query = db.collection("data");
  const [snapshot, loading, error] = useCollection(query);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([
      {
        name: "Desktops",
        //data: snapshot?.docs.map((doc) => doc.data().value),
        data: snapshot?.docs.map((doc) => doc.data().value),
      },
    ]);
  }, [snapshot]);

  console.log(series);
  console.log(snapshot?.docs);

  const [chartData] = useState({
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <div id="chart">
      <Chart
        options={chartData.options}
        series={series}
        type="line"
        height={350}
      />
      <button onClick={() => auth().signOut()}>Sign Out</button>
    </div>
  );
};

export default ApexChart;
