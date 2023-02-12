import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Guide from "./Guide";
import "./Guideliness.css";

function Guideliness() {
  return (
    <div className="guideliness">
      <Header />
      <h2 className="event__g">GUIDELINES FOR EVENTS</h2>

      <Guide
        t="EMERGING ENGINEER"
        p1="Practitioners of engineering, are professionals who invent, design, analyze, build and test machines"
        p2="1"
        p3="First round may aptitude and second round to take a set of questions"
        p4="Third round is group dicussion folled by final interview"
      />

      <Guide
        t="SURVEYOR"
        p1="Planning, financing, and design, and continues until the asset is built and ready for use"
        p2="1"
        p3="First round may aptitude with civil related questions"
        p4="Second round may site clearance test"
      />

      <Guide
        t="POWERPOINT PRESENTATION"
        p1="A presentation created on software from Microsoft that allows users to add audio, visual and audio/visual features to a presentation"
        p2="2"
        p3="It has 2 rounds and 4 incharges"
        p4="Student need to explain about the prepared ppt"
      />

      <Guide
        t="QUIZ"
        p1="A game or competition in which you have to answer questions"
        p2="1"
        p3="It has 3 rounds and 4 incharges"
        p4="First two rounds conducted in class room.Third round questions will be displayed in the screen"
      />

      <Guide
        t="CAD MODELLING"
        p1="he use of computer-based software to aid in design processes"
        p2="1"
        p3="First round may aptitude test of civil related questions"
        p4="Second round is the questions related with CAD design"
      />
      <Guide
        t="PRIME ARCHITECT"
        p1="Planning, financing, and design, and continues until the asset is built and ready for use"
        p2="1"
        p3="First round is paper craft "
        p4="Second round is craft of different things . It has 4 incharge"
      />
      <Guide
        t="PHOTOGRAPHY"
        p1="Photography is the art, application, and practice of creating durable images by recording light"
        p2="1"
        p3="Use your owm images,Don't use filter ."
        p4="Themes can be Crossing and joints,Retaing wall or landscapes "
      />
      <Guide
        t="MEME CREATION"
        p1="Avirally transmitted image embellished with text, usually sharing pointed commentary"
        p2="1"
        p3="The meme nust be related to civil engineering "
        p4="Don't use watermark or hd templates "
      />
      <Guide
        t="Treasure Hunt"
        p1="People try to find a hidden price by following special clues which have been left in different places"
        p2="5"
        p3="First clue will be open clue "
        p4="Search based on scanning QR code"
      />
      <Guide
        t="Rolling sir"
        p1="A description,either true or imagined of a connected series of events"
        p2="1"
        p3="Maximum time for story telling is 5 minutes "
        p4="It has 1 round with two incharges"
      />

      <Guide
        t="WALL PAINTING"
        p1="A painting made directly on a wall.such as a fresco or mural "
        p2="1"
        p3="The painting should be in civil related theme"
        p4="It has 1 round with two incharges"
      />
      <Footer />
    </div>
  );
}

export default Guideliness;
