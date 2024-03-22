"use client";
import Navbar from "../components/AfterLoginNavBar";
import { iceland } from "../components/ui/fonts";

import React from "react";
const productList = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
];

const TableBody = () => {
  return (
    <tbody>
      {productList.map((product, index) => (
        <tr
          key={index}
          className="bg-white border-b bg-opacity-5 hover:bg-opacity-10 "
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {product.name}
          </th>
          <td className="px-6 py-4">{product.color}</td>
          <td className="px-6 py-4">{product.category}</td>
          <td className="px-6 py-4">{product.price}</td>
          <td className="px-6 py-4">{product.price}</td>
          <td className="px-6 py-4">{product.price}</td>
          <td className="px-6 py-4">{product.price}</td>
        </tr>
      ))}
    </tbody>
  );
};

const DynamicTable = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
      <table className=" w-full text-sm text-left rtl:text-right text-white ">
        {/* <thead className="text-xs text-gray-700 uppercase bg-white bg-opacity-30 dark:text-gray-400"> */}
        <thead
          className={`${iceland.className} text-white md: text-2xl text-md  bg-white bg-opacity-30`}
        >
          <tr>
            <th scope="col" className="px-6 py-3">
              Rank
            </th>
            <th scope="col" className="px-6 py-3">
              Team Name
            </th>
            <th scope="col" className="px-6 py-3">
              Score
            </th>
            <th scope="col" className="px-6 py-3">
              Cyber security
            </th>
            <th scope="col" className="px-6 py-3">
              Real Estate
            </th>
            <th scope="col" className="px-6 py-3">
              Education
            </th>
            <th scope="col" className="px-6 py-3">
              AI
            </th>
          </tr>
        </thead>
        <TableBody />
      </table>
    </div>
  );
};

// Render the DynamicTable component

export default function Leaderboard() {
  return (
    <div>
      <Navbar />
      <DynamicTable />
    </div>
  );
}
