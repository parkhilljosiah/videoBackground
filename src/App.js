import "./App.css";
import backgroundVideo from "./backgroundVideo.mp4";
import we3 from "./we3Logo.webp";

function App() {

  return (
    <div className="container">
      <div className="header__container">
        <img className="header" src={we3} alt="we3" />
      </div>
      <video className="video" autoPlay loop muted playsinline="true" disablePictureInPicture="true">
        <source src={backgroundVideo} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
