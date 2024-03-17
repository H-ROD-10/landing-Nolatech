import Pic2 from '../../assets/Pic2.png'
import Pic3 from '../../assets/Pic3.png'
import Pic4 from '../../assets/Pic4.png'

export const Articles = () => {
  return (
    <section className="secondCard">
      <h1 style={{ fontSize: "60px", paddingTop: '30px', marginBottom: '10px', fontWeight: "900" }}>Lorem ipsum</h1>
      <p style={{ width: "50%", textAlign: "center", fontSize: "18px", fontWeight: "600", paddingBottom: '30px' }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </p>
      <div className="secondCardContent">
        <article className="card">
          <img src={Pic2} alt="pic2" className="cardImage" />
          <button className="btnCard">LOREM IPSUM</button>
        </article>
        <article className="card">
          <img src={Pic3} alt="pic2" className="cardImage" />
          <button className="btnCard">LOREM IPSUM</button>
        </article>
        <article className="card">
          <img src={Pic4} alt="pic2" className="cardImage" />
          <button className="btnCard">LOREM IPSUM</button>
        </article>
      </div>
      <button className="btnSecondCard">LEARN MORE</button>
    </section >
  )
}
