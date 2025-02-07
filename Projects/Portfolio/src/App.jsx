import Header from './components/1-header/Header'
import Hero from './components/2-hero/Hero'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect,useState } from 'react'


function App() {
  useEffect(() => {
    window.addEventListener("scroll",() => {
      if(window.scrollY>250){
        setshowScrollBTN(true)
      }else{
        setshowScrollBTN(false)
      }
    });
  },[]);
  const [showScrollBTN,setshowScrollBTN]=useState(false);

  return (
   <div id="up" className="container">
    <Header/>
    <Hero/>
    <div className="divider"/>
    <Main/>
    <div className="divider"/>
    <Contact/>
    <div className="divider"/>
    <Footer/>
    
    
    <a style={{opacity: showScrollBTN? 1 : 0 , transition:"1.4s" }} href="#up">
      <button  className="icon-keyboard_arrow_up scroll2Top"></button>
    </a>
    


    <div className="divider"/>
   </div>
  )
}

export default App
