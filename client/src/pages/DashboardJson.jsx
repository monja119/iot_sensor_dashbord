import 'react'
import {useEffect, useState}  from "react";
import { getDataJson } from '../services/sensorService.js'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

export default function DashboardJson()
{
    const [data, setData] = useState(null)
    const [chartData, setChartData] = useState(null);

    // fetch data
    useEffect(() => {
        getDataJson()
            .then(async (response)=>{
                console.log(response)
                const reponse_data = await response.data
                setData(reponse_data)
            })

    }, []);

    useEffect(() => {
        if(data){
            console.log(data)
            const labels = [];
            const temperatures = [];

            data.forEach((reading) => {
              const timestamp = reading.timestamp;
              const millis = parseInt(timestamp) * 1000;
              const date = new Date(millis);

              labels.push(date.toLocaleTimeString());
              temperatures.push(reading.temperature);
            });

            setChartData({
              labels,
              datasets: [
                {
                  label: 'Température (°C)',
                  data: temperatures,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
                }
              ]
            });
        }
    }, [data]);
    return (
        <>
          <h2>Dashboard Capteurs</h2>
          {chartData ? (
            <Line data={chartData} />
          ) : (
            <p>Chargement des données...</p>
          )}
        </>
    )
}

