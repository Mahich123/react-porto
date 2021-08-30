import React from 'react'
import microsoft from '../projects/microsoft.jpg'
import drone from '../projects/drone.jpg'
import tesla from '../projects/tesla.jpg'
import xet from '../projects/xet.jpg'
import cards from '../projects/cards.jpg'
import music from '../projects/music.jpg'
function Projects() {
    return (
        <section id="project" class="rellax" data-rellax-speed="7">
            <h2>SOME OF MY Projects</h2>
            <div className="project_frame">
                <div id="project_img">
                    <img  className="pro" src={microsoft}/>
                    <h4>Microsoft Clone</h4>
                    <div className="preview">
                    <a href="https://microsoft-clonne.netlify.app/"><p>LIVE</p></a>
                    </div>
                </div>

                <div id="project_img">
                    <img  className="pro" src={drone}/>
                    <h4>Drone Page</h4>
                    <div className="preview">
                    <a href="https://mahich123.github.io/Dronepage/"><p>LIVE</p></a>
                    </div>
                </div>
                
                <div id="project_img">
                    <img  className="pro" src={tesla}/>
                    <h4>Tesla Clone</h4>
                    <div className="preview">
                    <a href="https://clonetesla.netlify.app/"><p>LIVE</p></a>
                    </div>
                </div>

                <div id="project_img">
                    <img  className="pro" src={xet}/>
                    <h4>TEAM XET</h4>
                    <div className="preview">
                    <a href="https://mahich123.github.io/TEAM-XET/"><p>LIVE</p></a>
                    </div>
                </div>

                <div id="project_img">
                    <img  className="pro" src={cards}/>
                    <h4>Card Design</h4>
                    <div className="preview">
                    <a href="https://3-coloumn-card.netlify.app/"><p>LIVE</p></a>
                    </div>
                </div>

                <div id="project_img">
                    <img  className="pro" src={music}/>
                    <h4>Card Design</h4>
                    <div className="preview">
                    <a href="https://mahich123.github.io/musicplayer/"><p>LIVE</p></a>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Projects
