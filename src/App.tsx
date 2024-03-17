
import { Header } from './components/Header'
import { Articles } from './components/articles'
import { Banner } from './components/banner'
import { Call } from './components/call'
import { Contact } from './components/contact'
import { Content } from './components/content'
import { Footer } from './components/footer'
import { Gallery } from './components/gallery'
import { Hero } from './components/hero'
import { Menu } from './components/menu'
import { Videos } from './components/videos'

function App() {


  return (
    <>
      <Menu />
      <Header />
      <Hero />
      <main style={{ margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Content />
        <Articles />
        <Banner />
        <Videos />
        <Contact />
        <Call />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}

export default App
