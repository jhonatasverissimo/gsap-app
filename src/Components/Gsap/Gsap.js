import React from 'react';
import gsap from 'gsap';
//import ScrollTrigger from 'gsap/ScrollTrigger'
//import logo from './logo.svg';
//import './App.css';

const{useEffect, useRef} = React;


function Gsap() {
  // store a reference to the box div
  const boxRef = useRef();


  // wait until DOM has been rendered
  useEffect(() => {
    //gsap.from(boxRef.current, { opacity: 0,duration:2,height:'100vh', width:'100vw'});
    gsap.to(boxRef.current, { rotation: "+=360",opacity:1});
  });



  
  
  // DOM to render
  return( 
        <section className='container'>
            <div className="box"  ref={boxRef}>Hello</div>
        </section>
    )
}

export default Gsap;
