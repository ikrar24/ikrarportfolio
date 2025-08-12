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
function App() {

  
  return (
   <>

 

<Routes>

  <Route path="/" element={<>

   <HeroSection/>
<OverViwes/>

<Skills/>
<Experince/>
<ExContent/>
<Projects/>
<ProjectsContents/>
  
  </>} />



  <Route path="/scroll" element={<ScrollTest/>} />
</Routes>




   </>
  )
}

export default App
