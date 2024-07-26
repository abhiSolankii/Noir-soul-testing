'use client';
import React from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';
import { Line, Bar } from 'react-chartjs-2';
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

const valueTrendsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'NFT Value in USD',
      data: [1000, 2000, 1500, 3000, 2500, 4000],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }
  ],
};

const ownershipDurationData = {
  labels: ['NFT 1', 'NFT 2', 'NFT 3', 'NFT 4', 'NFT 5'],
  datasets: [
    {
      label: 'Days Held',
      data: [30, 60, 90, 120, 150],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
    }
  ],
};

const marketDemandData = {
  labels: ['NFT 1', 'NFT 2', 'NFT 3', 'NFT 4', 'NFT 5'],
  datasets: [
    {
      label: 'Trading Volume',
      data: [200, 450, 300, 600, 700],
      backgroundColor: 'rgb(46, 139, 87)',
      borderColor: 'rgba(255, 206, 86, 1)',
    }
  ],
};

export default function AssetPerformance() {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Asset Performance</h1>

          {/* Value Trends and Ownership Duration */}
          <div className="flex flex-wrap justify-between mb-8 ">
            <div className="w-full md:w-1/2 p-2">
              <div className="border rounded-lg p-4">
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Value Trends</h2>
                <Line data={valueTrendsData} options={{
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
                <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Ownership Duration</h2>
                <Bar data={ownershipDurationData} options={{
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

          {/* Market Demand */}
          <div className="w-full p-2">
            <div className="border rounded-lg p-4">
              <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Market Demand</h2>
              <Bar data={marketDemandData} options={{
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
      </div>
    </>
  );
}
