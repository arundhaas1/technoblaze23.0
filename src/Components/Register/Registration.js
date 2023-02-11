import React, { useState } from "react";
import "./Registration.css";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore/lite";
import { getFirestore } from "firebase/firestore/lite";

function Registration() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [College, setCollege] = useState("");
  const [Department, setDepartment] = useState("");
  const [Year, setYear] = useState("");
  const [Event, setEvent] = useState("");
  const [Acc, setAcc] = useState("");
  const [attachment, setAttachment] = useState("");

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

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onFileChange = async () => {
    var fileInput = document.querySelector("#input");
    if (fileInput) {
      var file = fileInput.files[0];
      const base64String = await toBase64(file);
      setAttachment(base64String);
    }
  };

  const postIt = () => {
    if (Email.includes("@gmail.com")) {
      if (
        Name !== "" &&
        Email !== "" &&
        Phone !== "" &&
        College !== "" &&
        Department !== "" &&
        Year !== "" &&
        Acc !== "" &&
        Event !== ""
      ) {
        sendIt();
      } else {
        alert("Some datas are missing");
      }
    } else {
      alert("Enter valid email id");
    }
  };

  const sendIt = async () => {
    await addDoc(collection(db, "technoblaze23.0"), {
      college: College,
      department: Department,
      email: Email,
      events: Event,
      name: Name,
      phone: Phone,
      year: Year,
      attachment: attachment,
      Acc : Acc,
    })
      .then(function(res) {
        alert("Data is sucessfully added");
      })
      .catch(function(err) {
        console.log(err);
        alert("Data can not be stored");
      });
  };


  return (
    <div className="registration">
      <div className="register__background">
        <div className="register__card">
          <p>Register</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Enter phone Number"
          />
          <input
            onChange={(e) => setCollege(e.target.value)}
            type="text"
            placeholder="Enter College"
          />
          <input
            onChange={(e) => setDepartment(e.target.value)}
            type="text"
            placeholder="Enter Department"
          />
          <input
            onChange={(e) => setYear(e.target.value)}
            type="text"
            placeholder="Enter Year"
          />
          <input
            onChange={(e) => setEvent(e.target.value)}
            type="text"
            placeholder="Enter Events"
          />
          <span>( Events may Technical,Non-Technical,Project,PPT )</span>
          <div className="radio">
          <input
            onChange={(e) => setAcc(e.target.value)}
            type="text"
            placeholder="Accomodation (Yes or No)"
            className="accom1"
          />
            
            <div className="addpayment">
              <div className="addp">
                <p>Add your Payment ScreenShot here..(if only paid through Online mode)</p>
              </div>
              <label className="addimage">
                <i>{attachment ? "Payment Added" : "Add Payment"}</i>
                <input
                  onChange={onFileChange}
                  id="input"
                  style={{ display: "none" }}
                  type="file"
                  accept=".jpg,.jpeg,.png"
                />
              </label>
            </div>
          </div>
          <h4 onClick={postIt}>Submit</h4>
        </div>
        <div className="pay">
          <p className="pay__amount" style={{ color: "white" }}>
            Spot Payment : <span> 250rs</span>
          </p>
          <p className="or">OR</p>
          <p className="gpay">
            GooglePay,Paytm,PhonePe : <span>+91 9360287390</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
