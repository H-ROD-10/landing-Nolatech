import Pic1 from '../../assets/Pic1.png'

export const Content = () => {
  return (
    <section className="firtsCard">
      <article className="textFirst">
        <h1 style={{ width: "70%", fontSize: "60px", fontWeight: 900, }}>Lorem ipsum dolor sit amet</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore
          magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        </p>
      </article>
      <img src={Pic1} alt="pic1" className="imageFirstCard" />
    </section>
  )
}
