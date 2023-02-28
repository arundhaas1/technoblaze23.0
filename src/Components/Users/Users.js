import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import "./Users.css";
import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";

function Users() {
  const [datas, setDatas] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyBHHskkdK5g3L0E7IVR8TqsjLqDBD8QFKg",
    authDomain: "technoblaze23-0.firebaseapp.com",
    projectId: "technoblaze23-0",
    storageBucket: "technoblaze23-0.appspot.com",
    messagingSenderId: "550328643861",
    appId: "1:550328643861:web:ceba8cf1131a996792b91c",
    measurementId: "G-0SZMD5TWE6",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const authdocs = collection(db, "technoblaze23.0");

//   useEffect(() => {
//     getData();
//   }, [datas]);

//   const getData = async () => {
//     const data = await getDocs(authdocs);
//     setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//   };

  console.log(datas);

  return (
    <div className="users">
      <Header />
      <h4 className="title"> REGISTERED USERS <span className="count"> ({datas.length}<span> Users)</span></span> </h4>
      <div className="user__body">
        {datas.map((data) => {
          return (
            <div className="user">
              <div className="user__sec">
                <p>ID : {data.id}</p>
                <div className="user__left">
                  <div className="user__dt">
                    <p className="head">Name </p>
                    <p>{data.name}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Email</p>
                    <p>{data.email}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Phone</p>
                    <p>{data.phone}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">College</p>
                    <p>{data.college}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Department</p>
                    <p>{data.department}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Year</p>
                    <p>{data.year}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Events</p>
                    <p>{data.events}</p>
                  </div>
                  <div className="user__dt">
                    <p className="head">Accomodation</p>
                    <p>{data.Acc}</p>
                  </div>
                  <div className="user__dt">
                   <p className="head">Payment</p>
                   <p>{data.attachment !== "" ? "yes" : "No"}</p>
                  </div>
                </div>
              </div>
              {data.attachment !== "" ? (
                <img alt="" src={data.attachment} className="image" />
              ) : null}
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Users;
