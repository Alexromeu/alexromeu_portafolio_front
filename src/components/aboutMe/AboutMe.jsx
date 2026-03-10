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

        <div className="text-container">
          <p className="text-about-me">I got into programming out of curiosity. Growing up in a place where the internet didn’t arrive until 2016, my first exposure to code was a single PASCAL book i found while I was in college studying Mathematics and Physics. That small start pushed me into HTML, CSS, and JavaScript, even though I could only learn the basics at the time.</p>
          <p className="text-about-me">When I moved to the United States, I finally had the chance to explore technology properly. I learned how the internet works, earned a networking certification, and experimented with tools like Packet Tracer — but programming kept pulling me back. I started reading books, building small projects, and practicing algorithms to strengthen my foundation.</p>
          <p className="text-about-me">Eventually I wanted to understand what was happening under the hood, so I switched to C and C++ to learn pointers, memory management, and low‑level architecture. That led me into operating systems and network programming, where everything finally clicked.</p>
          <p className="text-about-me">Today I’m focused on building projects, sharpening my fundamentals, and growing into a developer who understands both high‑level applications and the systems beneath them. I’m driven by curiosity, persistence, and the desire to truly understand how things work.</p>
        </div>
        <div className="readings">
            <h1>Foundational Reading</h1>
            <h3>I built my foundation through a mix of hands‑on projects and structured study, including books on:</h3>
            <div className="aboutme-table-container">
                {isMobile ? (
                    <BooksTableMobile books={ booksData }/>
                ) : <BooksTable books={ booksData } />
               
            }
                
            </div>
        </div>
     </div>
    </div>
    </AnimatedPage>  
    )
}