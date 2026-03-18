import '../../styles/responsive_styles/responsive_book_table.css'
import '../../styles/aboutme.css'
import AnimatedPage from '../../utils/AnimatedPage'
import BooksTable from './BooksTable'
import BooksTableMobile from './BooksTableMobile'
import { useEffect, useState } from 'react'

export default function AboutMe() {
    const [ booksData, setBooksData ] = useState([])
    const [ isMobile, setIsMobile ] = useState(window.innerWidth < 768)

    useEffect(() => {
        fetch('/books/books.json')
            .then(res => res.json())
            .then(data => setBooksData(data))
    }, [])

    useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
   
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

    return (
    <AnimatedPage>
    <div className='about-me-background-container'>
     <div className="about-me-container">

        <h1 className="aboutme-title">
            About Me
        </h1>

        <section className="text-container">
          <p className="text-about-me">I got into programming out of curiosity. Growing up in a place where the internet didn’t arrive until 2016, my first exposure to code was a single PASCAL book i found while I was in college studying Mathematics and Physics. That small start pushed me into HTML, CSS, and JavaScript, even though I could only learn the basics at the time.</p>
          <p className="text-about-me">When I moved to the United States, I finally had the chance to explore technology properly. I learned how the internet works, earned a networking certification, and experimented with tools like Packet Tracer — but i kept interest in programming. I started again with web development so earned a couple of certifications, eventually start reading books to get more detail and fundamentals, building small projects, and practicing algorithms to strengthen my foundation.</p>
          <p className="text-about-me">Eventually I wanted to understand what was happening under the hood, so I switched to C and C++ to learn pointers, memory management, and low‑level architecture. That led me into operating systems and network programming, where everything finally clicked.</p>
          <p className="text-about-me">Today I’m focused on building projects, sharpening my fundamentals, and growing into a developer who understands both high‑level applications and the systems beneath them. I’m driven by curiosity, persistence, and the desire to truly understand how things work.</p>
        </section>
        <section className="readings">
            <h1>Foundational Reading</h1>
            <h3>I built my foundation through a mix of hands‑on projects and structured study, including books on:</h3>
            <div className="aboutme-table-container">
                {isMobile ? (
                    <BooksTableMobile books={ booksData }/>
                ) : <BooksTable books={ booksData } />
               
            }
                
            </div>
        </section>
        <h2 className="edu-title">Education</h2>
        <section className="education">
            <h2 className="degree-title">B.Sc Mathematics and Physics</h2>
            <p><strong>University </strong>of Pedagogical Sciences EJV <a href='https://www.whed.net/institutions/IAU-009041' target='_blank'><sup>&#9432;</sup></a></p>
        </section>
        <h2 className="cert-title">Certifications</h2>
        <section className="certifications">
            <div className="cert-respWebDes">   
                <a href="https://www.freecodecamp.org/certification/fcc8994cc9c-0d5a-4611-9215-e073ee331aa4/responsive-web-design" className="cert-link" target='_blank'>FreeCodeCamp: Responsive Web Design.</a>
            </div>

            <div className="cert-algoDataStruct">   
                <a href="https://www.freecodecamp.org/certification/fcc8994cc9c-0d5a-4611-9215-e073ee331aa4/javascript-algorithms-and-data-structures-v8" className="cert-link" target='_blank'>FreeCodeCamp: Legacy JavaScript Algorithms and Data Structures.</a>
            </div>
        </section>
     </div>
    </div>
    </AnimatedPage>  
    )
}