'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale
);

// Data for the charts
const topTracksData = {
  labels: ['Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5'],
  datasets: [
    {
      label: 'Number of Plays',
      data: [120, 100, 80, 90, 110],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(255, 206, 86, 1)',
    }
  ],
};

const listeningTimeData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Listening Time (hours)',
      data: [30, 45, 50, 40, 60, 70],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }
  ],
};

const genrePreferencesData = {
  labels: ['Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical'],
  datasets: [
    {
      label: 'Genre Preferences',
      data: [40, 30, 20, 5, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
      ],
      borderColor: 'rgba(255, 206, 86, 1)',
    }
  ],
};

export default function ListeningHabits() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Listening Habits</h1>

          {/* Personalized Habits */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Personalized Habits</h2>
            <p>Your personalized music consumption habits will be displayed here.</p>
          </div>

          {/* Top Tracks and Listening Time */}
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/2 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Top Tracks</h2>
                <Bar data={topTracksData} options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: 'white'
                      }
                    },
                    y: {
                      ticks: {
                        color: 'white'
                      }
                    }
                  }
                }} />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Listening Time</h2>
                <Line data={listeningTimeData} options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  },
                  scales: {
                    x: {
                      ticks: {
                        color: 'white'
                      }
                    },
                    y: {
                      ticks: {
                        color: 'white'
                      }
                    }
                  }
                }} />
              </div>
            </div>
          </div>

          {/* Genre Preferences */}
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-2/5 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Genre Preferences</h2>
                <Pie data={genrePreferencesData} options={{
                  plugins: {
                    legend: {
                      labels: {
                        color: 'white'
                      }
                    }
                  }
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
