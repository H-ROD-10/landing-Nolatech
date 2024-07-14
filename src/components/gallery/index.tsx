import Pic7 from "../../assets/Pic7.png"
import Pic8 from "../../assets/Pic8.png"
import Pic9 from "../../assets/Pic9.png"
import Pic10 from "../../assets/Pic10.png"


export const Gallery = () => {
  return (
    <div className="sevenCard">

      <h1 style={{ fontSize: "56px", color: "white" }}>Lorem ipsum</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "5%", marginLeft: "10%" }}>
        <img src={Pic7} alt="pci" style={{ objectFit: "cover", width: "320px", height: "400px" }} />
        <img src={Pic8} alt="pci" style={{ objectFit: "cover", width: "320px", height: "400px" }} />
        <img src={Pic9} alt="pci" style={{ objectFit: "cover", width: "320px", height: "400px" }} />
        <img src={Pic10} alt="pci" style={{ objectFit: "cover", width: "100px", height: "400px" }} />
      </div>
      <div style={{ display: "flex", marginTop: "2%", justifyContent: "center" }}>
        <i className="fa-solid fa-circle" style={{ color: "white" }}></i>
        <i className="fa-regular fa-circle" style={{ color: "white", marginLeft: "10px" }}></i>
        <i className="fa-regular fa-circle" style={{ color: "white", marginLeft: "10px" }}></i>
      </div>
      <button className="btnStandar" style={{ color: "black", backgroundColor: "white", marginTop: "5%", fontSize: "16px" }}>
        VIEW ALL
      </button>
    </div>
  )
}
