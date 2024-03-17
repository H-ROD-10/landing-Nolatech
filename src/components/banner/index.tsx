import Pic5 from "../../assets/Pic5.png"

export const Banner = () => {
  return (
    <section className="threeCard">
      <div className="threeCardContent">
        <p className="textCardThree">Lorem ipsum</p>
        <p className="textCardThree">dolor sit</p>
        <p className="textCardThree">amet,</p>
        <p className="textCardThree">consetetur</p>
        <button className="btnThreeCard">LOREM IPSUM DOLOR SIT</button>
        <button className="btnThreeCard2">LOREM IPSUM DOLOR SIT AMET</button>
      </div>
      <div className="containerThreeCardImage">
        <img src={Pic5} alt="pic5" className="threeCardImage" />
      </div>
    </section>
  )
}
