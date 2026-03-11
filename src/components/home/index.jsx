import Hero from "./Hero";
import Projects from "./Projects/Projects";
import Skills from "./skills/Skills";
import ScrollAnimation from "../../utils/scrollAnimation";
import AnimatedPage from "../../utils/AnimatedPage";
import Footer from "./footer/Footer";


export default function Home() {

    return (<>
    <AnimatedPage>
      <Hero />
      <ScrollAnimation>
        <Projects />
      </ScrollAnimation> 

      <ScrollAnimation>  
        <Skills />
      </ScrollAnimation>
   
      <Footer/>   
    
      
    </AnimatedPage>     
    </>)
}