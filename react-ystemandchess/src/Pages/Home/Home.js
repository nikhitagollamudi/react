import "./Home.css";
import LogoLineBr from "../../images/LogoLineBreak.png";
import TreesGroup from "../../images/Trees-Group.png";
import Heart from '../../images/heart-regular.svg'
import Gem from '../../images/gem-regular.svg'
import LargeInfo from '../../images/large_info.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    // Sends the user to donate page, when donate button is clicked
    const handleDonateButton = () =>{
        window.location.href = 'https://donorbox.org/y-stem-and-chess-inc-learning-platform'
    }

    return (
    <div className="home-container">
      <div className="home-content1">
        <div className="info">
          <h1>
            Helping your child develop <br />
            critical thinking skills!
          </h1>

          <p>
            We are a nonprofit organization empowering <br></br>children to find
            their own success in STEM through <br></br>Chess, Math and Computer
            Science.
          </p>

          <button className="donate-button" onClick={handleDonateButton}>
            <strong>Donate</strong>
          </button>
        </div>
        <div className="pic">
          <img src={TreesGroup} id="tree-group-img"></img>
        </div>
      </div>
      <img src={LogoLineBr} className="logo-break"></img>
      <h1 id="floating-h1">Everyone is included.</h1>
      <h1 id="floating-h1">Everyone is welcomed.</h1>
      <div className="home-content2">
        <div className="card1">
            <img src={Heart}></img>
            <h1>Free</h1>
            <p>For students who qualify for <br></br> free and reduced lunch.<br></br>
            Our lessons are free.</p>
            <button><strong>Join Now!</strong></button>
        </div>
        <div className="card2">
            <img src={Gem}></img>
            <h1>Premium</h1>
            <p>For students who don't qualify <br></br> for free and reduced lunch. <br></br>
            $25 / Week <br></br> First lesson is FREE. <br></br> Cancel anytime.</p>
            <button><strong>Join Now!</strong></button>
        </div>
      </div>
      <div className="home-content3">
        <img src={LargeInfo}></img>
      </div>
    </div>
  );
};

export default Home;