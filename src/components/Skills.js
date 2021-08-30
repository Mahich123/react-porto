import React from 'react'
import html from '../images/HTML5 1.png'
import css from '../images/css3-logo 1.svg'
import boot from '../images/Bootstrap_(front-end_framework)-Logo.wine.png'
import js from '../images/js 1.png'
import react from '../images/react 1.png'
import git from '../images/git 1.png'
import figma from '../images/figma 1.png'
import tailwind from '../images/tailwind css 1.png'
function Skills() {
    return (
        <section id="skills">
             <h3>SKILLS</h3>
             <div className="ico">
                 <div className="skill_frame">
                    <img src={html}/>
                 </div>
                 
                 <div className="skill_frame">
                    <img src={css}/>
                 </div>

                 <div className="skill_frame">
                    <img  className="boots" src={boot}/>
                 </div>
                 
                 <div className="skill_frame">
                    <img  src={js}/>
                 </div>

                 <div className="skill_frame">
                    <img  src={react}/>
                 </div>

                 <div className="skill_frame">
                    <img  src={git}/>
                 </div>

                 <div className="skill_frame">
                    <img  src={figma}/>
                 </div>

                 <div className="skill_frame">
                    <img  src={tailwind}/>
                 </div>
             </div>
        </section>
    )
}

export default Skills
