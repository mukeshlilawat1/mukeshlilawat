import React from 'react'

// components
import ProjectCard from './ProjectCard';


const works = [
    {
        imgSrc: '/src/assets/space.png',
        title: 'Space-Invaders-Game',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: 'https://github.com/mukeshlilawat1/Space-Invaders-Game-Java.git'
    },
    {
        imgSrc: '/src/assets/dinosaur.png',
        title: 'Google-Chrome-Dinosaur-Game',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: 'https://github.com/mukeshlilawat1/Google-Chrome-Dinosaur-Game.git'
    },
    {
        imgSrc: '/src/assets/birds.png',
        title: 'Floppy-Bird-Game',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: 'https://github.com/mukeshlilawat1/Floppy-Bird-Game.git'
    },
];

const Work = () => {
    return ( 
        <section id='work' className='section'>
            <div className='container'>
                <h2 className='headline-2 mb-8 reveal-up'>
                    My portfolio highlights</h2>

                <div className="grid gap-x-6 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up"/>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Work