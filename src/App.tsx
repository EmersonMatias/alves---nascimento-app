import HeroSection from "./components/sections/hero-section/hero-section"
import Section2 from "./components/sections/section-2/section-2"
import Section3 from "./components/sections/section-3/section-3"
import Section4 from "./components/sections/section-4/section-4"


function App() {

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />

    </main>
  )
}

export default App
