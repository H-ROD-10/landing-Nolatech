import Pic11 from "../../assets/Pic11.png"
import Pic12 from "../../assets/Pic12.png"
import Pic13 from "../../assets/Pic13.png"
import Pic14 from "../../assets/Pic14.png"
import Pic15 from "../../assets/Pic15.png"
import Pic16 from "../../assets/Pic16.png"

export const Videos = () => {
  return (
    <section className="fourCard">
      <h1 style={{ fontSize: "62px", fontWeight: 800 }}>Latest videos</h1>
      <div className="fourCardContent">
        <div className="fourCardFile">
          <img src={Pic11} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className="fourCardFile">
          <img src={Pic12} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className="fourCardFile">
          <img src={Pic13} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className="fourCardFile">
          <img src={Pic14} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className="fourCardFile">
          <img src={Pic15} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
        <div className="fourCardFile">
          <img src={Pic16} alt="file" style={{ objectFit: "cover", maxWidth: "250px" }} />
          <p style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet, consetetur
          </p>
        </div>
      </div>
      <button className="btnFourCard">VIEW ALL</button>
    </section>
  )
}
