import IconGrab from "../../assets/icongrab.png"
import PrbHeader from "../../assets/PrbHeader.png"

export const Hero = () => {
  return (
    <nav>
      <img src={PrbHeader} alt="prb_header" className="Navbackground" />
      <div className="contentNav">
        <div className="headerNav">
          <img src={IconGrab} alt="grab" className="iconHeadernNav" />
          <div className="contentNavBody">
            <div className="routeNav">
              <a href="#" className="route">LOREM IPSUM</a>
              <a href="#" className="route">LOREM IPSUM</a>
              <a href="#" className="route">LOREM IPSUM</a>
              <a href="#" className="route">LOREM IPSUM</a>
              <a href="#" className="route">LOREM IPSUM</a>
              <a href="#" className="route">LOREM IPSUM</a>
            </div>
            <div className="bodyNav">
              <h1 className="bodyNavTitle">LOREM IPSUM</h1>
              <h2 className="bodyNavTitle2">LOREM IPSUM DOLOR &nbsp;</h2>
              <h3 className="bodyNavTitle">LOREM IPSUM</h3>
              <button className="bodyNavButton">WHAT IS NEXT</button>
            </div>
          </div>
        </div>

        <div className="footerNav">
          <div className="footerContenTextNav">
            <p>Lorem ipsum dolor sit
              amet, consetetur</p>
          </div>
          <div className="footerContenTimeNav">
            <div className="blockTime">
              <span>170</span>
              <span className="blockSpan">days</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>13</span>
              <span className="blockSpan">Hour</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>39</span>
              <span className="blockSpan">Minutes</span>
            </div>
            <hr className="divider" />
            <div className="blockTime">
              <span>29</span>
              <span className="blockSpan">Seconds</span>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}
