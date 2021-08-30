import React from 'react'
import me from '../images/me.jpeg'
function About() {
    return (
        <section  id="about"  className="rellax" data-rellax-speed="5">
            <h2>ABOUT ME</h2>
            <div id="bio">
                <p>HI, my name is Mahi Chowdhury. I'm student {`&`} frontend developer from Bangladesh. It's been a year i'm working as web developer.Currently doing BSc in Computer Science. Like to create stunning websites. I can create Responsive websites. That’s all about me.
                <br />
                <br />
                I would love to hear from you. Whether it’s 
projects, job opportunity or just a chat you can contact me.
                </p>

                <div id="frame">
                    <div id="me">
                        <img className="my" src={me} alt="me"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

