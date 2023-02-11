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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const authdocs = collection(db, "technoblaze23.0");

  useEffect(() => {
    getData();
  }, [datas]);

  const getData = async () => {
    const data = await getDocs(authdocs);
    setDatas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log(datas);

  return (
    <div className="users">
      <Header />
      <div className="user__body">
        {datas.map((data) => {
          return (
            <div className="user">
              <div className="user__sec">
                <div className="user__left">
                  <p>Name </p>
                  <p>Email</p>
                  <p>Phone</p>
                  <p>College</p>
                  <p>Department</p>
                  <p>Year</p>
                  <p>Events</p>
                  <p>Accomodation</p>
                  <p>Payment</p>
                </div>

                <div className="user__right">
                  <p>{data.name}</p>
                  <p>{data.email}</p>
                  <p>{data.phone}</p>
                  <p>{data.college}</p>
                  <p>{data.department}</p>
                  <p>{data.year}</p>
                  <p>{data.events}</p>
                  <p>{data.Acc}</p>
                  <p>{data.attachment != "" ? "yes" : "No"}</p>
                </div>
              </div>
              {data.attachment != "" ? (
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
