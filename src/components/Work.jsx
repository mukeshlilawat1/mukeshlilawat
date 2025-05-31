import React from 'react'

// components
import ProjectCard from './ProjectCard';


const works = [
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Full Stack Hotel Booking App',
        tags: ['API', 'MVC', 'Development'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Full-Stack Instagram clone',
        tags: ['API', 'SPA'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-3.jpg',
        title: 'Full-Stack Banking Dashboard',
        tags: ['Development', 'API'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-4.jpg',
        title: 'Full-Stack Food Delivery App',
        tags: ['Web-design', 'Development'],
        projectLink: ''
    },
    {
        imgSrc: '/images/project-5.jpg',
        title: 'Full-Stack ECommerce website',
        tags: ['ECommerce', 'Development'],
        projectLink: ''
    },
];

const Work = () => {
    return (
        <section id='work' className='section'>
            <div className='container'>
                <h2 className='headline-2 mb-8'>
                    My portfolio highlights</h2>

                <div className=''>
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} />
                    ))}
                </div>
            </div>
        </section>
    )

}

export default Work