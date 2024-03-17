import JoinUs from '../../assets/Join Us.png'

export const Contact = () => {
  return (
    <section className="fiveCard">
      <img
        src={JoinUs}
        alt="backgroun"
        style={{
          position: "absolute",
          width: "100%",
          objectFit: "fill",
          zIndex: "-1",
          height: "100%",
          maxHeight: "850px",
        }}
      />
      <div className="formFiveCard">
        <h1 style={{ fontSize: "66px", fontWeight: "bold", color: "white", margin: "2%" }}>
          JOIN US.
        </h1>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", color: "white", margin: "2%" }}>
          Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
        </h2>
        <div style={{ display: "flex" }}>
          <input type="text" className="inputFormBasic" placeholder="Name" style={{ marginRight: "0px", width: "100%" }} />
          <input type="text" className="inputFormBasic" placeholder="Username" style={{ width: "100%" }} />
        </div>
        <div style={{ display: "flex" }}>
          <input type="text" className="inputFormBasic" placeholder="Phone" style={{ marginRight: "0px", width: "100%" }} />
          <input type="text" className="inputFormBasic" placeholder="Email" style={{ width: "100%" }} />
        </div>
        <input type="text" className="inputFormBasic" placeholder="Departamen" />
        <textarea className="inputFormBasic" placeholder="Mensajse" style={{ height: "120px", paddingTop: "16px" }} />
        <button className="btnStandar" style={{ maxWidth: "30%", margin: "2%", fontSize: "18px", padding: "20px 42px" }}>
          I’M IN
        </button>
        <p
          style={{ fontSize: "16px", fontWeight: 500, color: "white", margin: "2%", textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        </p>
        <p style={{ margin: 0, fontSize: "16px", fontWeight: 500, color: "white", textAlign: "center" }}>
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </p>
      </div>
    </section>
  )
}
