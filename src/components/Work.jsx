import React from 'react'

// components
import ProjectCard from './ProjectCard';


const works = [
    {
        imgSrc: '/src/assets/space.png',
        title: 'Java Game Application',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: ''
    },
    {
        imgSrc: '/src/assets/dinosaur.png',
        title: 'Java Game Application',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: ''
    },
    {
        imgSrc: '/src/assets/birds.png',
        title: 'Java Game Application',
        tags: ['Core Java', 'JavaSwing & Java AWT', 'Development'],
        projectLink: ''
    },
];

const Work = () => {
    return (
        <section id='work' className='section'>
            <div className='container'>
                <h2 className='headline-2 mb-8'>
                    My portfolio highlights</h2>

                <div className="grid gap-x-6 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Work