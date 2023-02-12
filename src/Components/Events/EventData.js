import React from "react";
import Card from "./Card";
import "./Eventdata.css";
function EventData() {
  return (
    <div className="eventdatas">
      <div className="event__tecdata">
        <p>Technical Events</p>
        <div className="technical__data">
          <Card p={"Strategy meets competition in this escape-style game."} name={"Code Cracking"} url={"assets/1.jpg"} />
          <Card p={"Engineering can transform our world and brought innovation to our lives."} name={"Emerging Engineer"} url={"assets/2.jpg"} />
          <Card p={"Surveyors provide professional advice on a range of construction-related matters."} name={"Surveyor"} url={"assets/3.jpg"} />
          <Card p={"We elevate the good old quiz to new heights of audiovisual entertainment"} name={"Quiz"} url={"assets/4.jpg"} />
          {/* <Card p={"Competition where contestants present their working models that they have created"} name={"Working Model"} url={"assets/5.jpg"} /> */}
          <Card p={"Bridge the gap with closed minds through careful dissection of ideas"} name={"Powerpoint Presentation"} url={"assets/6.jpg"} />
          {/* <Card p={"Planning, financing, and design, and continues until the asset is built and ready for use"} name={"Poster Making"} url={"assets/7.jpg"} /> */}
          <Card p={"Responsible for creating, improving, and protecting our immediate environment."} name={"CAD Modelling"} url={"assets/8.jpg"} />
          <Card p={"Practitioners of engineering, are professionals who invent, design, analyze, build and test machines"} name={"Prime Architect"} url={"assets/9.jpg"} />
        </div>
      </div>

      <div className="event__nontecdata">
        <p>Non Technical Events</p>
        <div className="nontechnical__data">
        <Card p={"Avirally transmitted image embellished with text, usually sharing pointed commentary"} name={"Meme Creation"} url={"assets/12.jpg"} />
        <Card p={"Photography is the art, application, and practice of creating durable images by recording light"} name={"Photography"} url={"assets/11.jpg"} />
        <Card p={"the idea of hunting for hidden treasures has always been exciting and adventurous"} name={"Treasure Hunt"} url={"assets/13.jpg"} />
        <Card p={"Copy that aims to tell your potential attendees what will be happening at the event"} name={"Rolling Sir"} url={"assets/14.jpg"} />
        <Card p={"Wall Art Festival is a colorful journey that intends to gather artists for wall paintings"} name={"Wall Painting"} url={"assets/15.jpg"} />
        </div>
      </div>
    </div>
  );
}

export default EventData;
