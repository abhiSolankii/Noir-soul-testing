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
const postsCommentsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Posts',
      data: [15, 20, 25, 18, 22, 30],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(255, 206, 86, 1)',
    },
    {
      label: 'Comments',
      data: [30, 45, 40, 35, 50, 55],
      backgroundColor: 'rgba(153, 102, 255, 0.6)',
      borderColor: 'rgba(255, 206, 86, 1)',
    }
  ],
};

const eventParticipationData = {
  labels: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5'],
  datasets: [
    {
      label: 'Events Attended',
      data: [1, 2, 1, 3, 2],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }
  ],
};

const followersFollowingData = {
  labels: ['Followers', 'Following'],
  datasets: [
    {
      label: 'Social Connections',
      data: [200, 150],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)'
      ],
      borderColor: 'rgba(255, 206, 86, 1)',
    }
  ],
};

export default function CommunityEngagement() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Community Engagement</h1>

          {/* Metrics */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Metrics</h2>
            <p>Metrics on your interaction within the Noir Soul Syndicate community.</p>
          </div>

          {/* Posts and Comments */}
          <div className="flex flex-wrap justify-between mb-8">
            <div className="w-full md:w-1/2 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Posts and Comments</h2>
                <Bar data={postsCommentsData} options={{
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
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Event Participation</h2>
                <Line data={eventParticipationData} options={{
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

          {/* Followers and Following */}
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-2/5 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Followers and Following</h2>
                <Pie data={followersFollowingData} options={{
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
