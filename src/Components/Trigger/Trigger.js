import gsap from "gsap";
import {useRef,useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Trigger(){
    gsap.registerPlugin(ScrollTrigger);
    const circleRef = useRef(null);

    useEffect(() => {
        gsap.to("#thirdCircle", {
          x: 100,
          duration: 2,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: "#thirdCircle"
          }
        });
      }, []);
    return(
        <>
            
            <section className="container flex">
                <h1 className={circleRef} id="thirdCircle">Report.js</h1>
            </section>
        </>
    )
}