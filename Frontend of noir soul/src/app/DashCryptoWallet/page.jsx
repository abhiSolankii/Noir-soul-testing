'use client';
import React, { useState } from "react";
import Sidebar from '../../components/Sidebar2/sidebar2';

const initialBalance = [
  { currency: "BTC", amount: 2.3 },
  { currency: "ETH", amount: 5.1 }
];

const initialTransactions = [
  { id: 1, date: "2024-07-01", description: "Deposit", currency: "BTC", amount: 0.5 },
  { id: 2, date: "2024-06-30", description: "Withdrawal", currency: "BTC", amount: -0.2 },
  { id: 3, date: "2024-06-29", description: "Deposit", currency: "ETH", amount: 1 },
];

const CryptoWallet = () => {
  const [currentBalance, setCurrentBalance] = useState(initialBalance);
  const [recentTransactions, setRecentTransactions] = useState(initialTransactions);

  const handleDepositWithdraw = (action) => {
    const currency = prompt("Enter the type of cryptocurrency (e.g., BTC, ETH):");
    const amount = parseFloat(prompt(`Enter the amount to ${action} (e.g., 0.5):`));

    if (!currency || isNaN(amount)) {
      alert("Invalid input. Please enter valid currency type and amount.");
      return;
    }

    const newTransaction = {
      id: recentTransactions.length + 1,
      date: new Date().toISOString().slice(0, 10),
      description: action,
      currency: currency.toUpperCase(),
      amount: action === "Withdrawal" ? -amount : amount
    };

    const updatedBalance = currentBalance.map(item => {
      if (item.currency === currency.toUpperCase()) {
        return { ...item, amount: item.amount + newTransaction.amount };
      }
      return item;
    });

    setCurrentBalance(updatedBalance);
    setRecentTransactions([...recentTransactions, newTransaction]);
  };

  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 bg-black text-white overflow-auto ml-64">
          <h1 className="text-5xl text-center font-bold text-yellow-400 mb-8">Cryptocurrency Wallet</h1>

          {/* Balance Overview */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Balance Overview</h2>
            {currentBalance.map((balance, index) => (
              <div key={index} className="flex justify-between">
                <div className="text-xl">{balance.currency} Balance:</div>
                <div className="text-xl">{balance.amount} {balance.currency}</div>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="text-xl">Recent Transactions:</div>
              <div className="text-xl">{recentTransactions.length}</div>
            </div>
          </div>

          {/* Deposit & Withdraw */}
          <div className="border rounded-lg p-4 mb-8">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Deposit & Withdraw</h2>
            <div className="flex justify-between">
              <button onClick={() => handleDepositWithdraw('Deposit')} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Deposit</button>
              <button onClick={() => handleDepositWithdraw('Withdrawal')} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500">Withdraw</button>
            </div>
          </div>

          {/* Transaction History */}
          <div className="border rounded-lg p-4">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Transaction History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-black border rounded-lg shadow-md">
                <thead>
                  <tr className="bg-black text-yellow-400 border-b border-gray-200 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left">Description</th>
                    <th className="py-3 px-6 text-left">Currency</th>
                    <th className="py-3 px-6 text-left">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-yellow-400 text-sm font-light">
                  {recentTransactions.map(transaction => (
                    <tr key={transaction.id} className="border-b border-gray-200 hover:bg-gray-800">
                      <td className="py-3 px-6 text-left whitespace-nowrap">{transaction.date}</td>
                      <td className="py-3 px-6 text-left">{transaction.description}</td>
                      <td className="py-3 px-6 text-left">{transaction.currency}</td>
                      <td className="py-3 px-6 text-left">{transaction.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default CryptoWallet;
