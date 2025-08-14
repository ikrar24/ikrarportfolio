import './App.css'
import ExContent from './Componets/Experince/ExContent'
import Experince from './Componets/Experince/Experince'
import HeroSection from './Componets/HeroSections/HeroSection'
import OverViwes from './Componets/Overviwes/OverViwes'
import Projects from './Componets/Projects/Projects'
import ProjectsContents from './Componets/Projects/ProjectsContents'
import Test from './Componets/Test/Test'
import { Route, Router , Routes } from "react-router-dom"
import ScrollTest from "./Componets/ScrollTest"
import Skills from './Componets/Skills/Skills'
import Contect from './Componets/Contect/Contect'
import Footer from './Footer/Footer'
function App() {

  
  return (
   <>

{/* app-wrapper for css issue fixing */}

 <div className="app-wrapper" >

<Routes>

  <Route path="/" element={<>

   <HeroSection/>
<OverViwes/>

<Skills/>
<Experince/>
<ExContent/>
<Projects/>
<ProjectsContents/>
<Contect/>
  <Footer/>
  </>} />



  <Route path="/scroll" element={<ScrollTest/>} />
</Routes>
</div>



   </>
  )
}

export default App
