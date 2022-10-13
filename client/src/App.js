import React from "react";
import "./App.css";
import Profile from "./profile/profile";
import pic from "./pic.jpg";

function App() {
  const hundelalert = () => {
    alert("return");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Profile
          name="Ouafa BENAMOR"
          bio="She is a Tunisian creative head designer and digital
          marketing strategist. with over 14 years of experience in media, graphic
          design, interiors, and product design, the talented Ouafa Ben Amor
          started her studies at the Institute of Press and then moved to the
          School of Science and Design technologies in Tunis ( ESSTED) and later
          she had a master’s degree in Art and communication Technologies in 2008.
          She presented her thesis about seeing Tunisia through light and color
          and she dove into the digital painting using light. She is an active
          member of the Tunisia photo art Association and had a deep relationship
          with photography. Besides, She is the founder of the critical mass
          cycling movement. She held the positions of communication specialist and
          designer in several entities both locally and abroad like the festival
          of Hammamet, JCC in Montreal, and VTS Verein der Tunesier in Stuttgart.
          She had a broad artistic experience and social engagement history. She
          joined the YOUNG MASTER’s PROGRAM by INTERFERENCE Light Art Project
          Tunis as an art mediator and artist accomplice to expand her knowledge
          about light art projects."
          pro="Head Designer"
          hundelalert={hundelalert}
        >
          <img
            style={{
              width: 230,
              height: 230,
              borderRadius: "50%",
              marginTop: 10,
            }}
            src={pic}
            alt="pic"
          />
        </Profile>
      </header>
    </div>
  );
}

export default App;
