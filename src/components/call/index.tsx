import Pic6 from "../../assets/Pic6.png"

export const Call = () => {
  return (
    <section className="sixCard">
      <img
        src={Pic6}
        alt="backgroun"
        style={{
          position: "absolute",
          objectFit: "fill",
          maxWidth: "100%",
          width: "1333.9px",
          maxHeight: "800px",
          right: "85px",
        }}
      />
      <div style={{ width: "40%", paddingLeft: "5%", marginTop: "10%", zIndex: 1 }}>
        <h1 style={{ fontSize: "76px", fontWeight: "bold", margin: 0 }}>Lorem ipsum</h1>
        <h2 style={{ fontSize: "76px", fontWeight: "bold", margin: 0 }}>dolor sit</h2>
        <p style={{ width: '100%', fontWeight: 600 }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua.
        </p>
        <button className="btnStandar" style={{ maxWidth: "60%", margin: "2%", fontSize: "18px", padding: "25px 90px" }}>VIEW ALL</button>
      </div>

    </section>
  )
}
