"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [raffleList, setRaffleList] = useState([]);
  useEffect(() => {
    fetch("api/raffleList")
      .then((res) => res.json())
      .then((data) => setRaffleList(data));
  }, []);

  console.log(raffleList);
  return (
    <div className="mt-10 pl-10">
      <h1 className="text-2xl font-bold">Raffle Page</h1>
      <p className="text-sm text-gray-500">Welcome to the raffle page</p>
      <div className="mt-10">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Create Raffle
        </button>
      </div>
      <div className="mt-10">
        <p>Raffle List</p>
      </div>
    </div>
  );
}
