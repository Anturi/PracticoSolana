import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, {useEffect, useState} from "react";
export default function Home() {
  const[transaction, setTransaction] = useState([]);
  const TRANSACTION = ["https://s3.egospodarka.pl/grafika2/decyzja-administracyjna/Czy-decyzja-administracyjna-moze-byc-wydana-na-podstawie-wadliwego-przepisu-190373-640x640.jpg",
  "https://media.metrolatam.com/2019/01/26/tramite-4536b3bc9950a228de6287cd76effb0e-1200x800.jpg"];
  useEffect(() => {
    setTransaction(TRANSACTION);
  });
  return (
  <div className="flex justify-center">
    <div className="px-4" style={{maxWidth:"1600px"}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {transaction.map((transaction,i) => (
          <div key={i} className="border shadow rounded-xl overflow-hidden">
            <img style={{height: "20rem"}} src={transaction}/>
          </div>
        ))}
      </div>
    </div>
  </div>);
}
