import React from 'react'

/**
 * components
 */
import SkillCard from './SkillCard';



const skillItem = [
    {
        imgSrc: './src/assets/figma.svg',
        label: 'Figma',
        desc: 'Design tool'
    },
    {
        imgSrc: './src/assets/css-3.svg',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: './src/assets/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: './src/assets/cpp.svg',
        label: 'Cpp',
        desc: 'Command Line'
    },


    {
        imgSrc: './src/assets/node.svg',
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: './src/assets/amazon.svg',
        label: 'AWS',
        desc: 'Cloud Computing'
    },
    {
        imgSrc: './src/assets/angular.svg',
        label: 'Angular',
        desc: 'Framework'
    },
    {
        imgSrc: './src/assets/react.svg',
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: './src/assets/Tailwind.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: './src/assets/spring-boot.svg',
        label: 'Spring Boot',
        desc: 'Framework'
    },

    {
        imgSrc: './src/assets/linux.svg',
        label: 'Linux',
        desc: 'Command Line'
    },

    {
        imgSrc: './src/assets/kubernetes.svg',
        label: 'Kubernetes',
        desc: 'Container Orchestration'
    },

    {
        imgSrc: './src/assets/laravel.svg',
        label: 'Laravel',
        desc: 'Framework'
    },
    {
        imgSrc: './src/assets/python.svg',
        label: 'Python',
        desc: 'Programming language'
    },

    {
        imgSrc: './src/assets/rust.svg',
        label: 'Rust',
        desc: 'Programming language'
    }, {
        imgSrc: './src/assets/NumPy.svg',
        label: 'NumPy',
        desc: 'Framework'
    }, {
        imgSrc: './src/assets/maven.svg',
        label: 'Maven',
        desc: 'Build Automation'
    },
    {
        imgSrc: './src/assets/bash.svg',
        label: 'Bash',
        desc: 'Command Line'
    },
    {
        imgSrc: './src/assets/git.svg',
        label: 'Git',
        desc: 'Version Control'
    },

    {
        imgSrc: './src/assets/html-5.svg',
        label: 'HTML5',
        desc: 'Markup Language'
    },

    {
        imgSrc: './src/assets/docker.svg',
        label: 'Docker',
        desc: 'Containerization'
    },

    {
        imgSrc: './src/assets/mysql-original-wordmark.svg',
        label: 'MySql',
        desc: 'DataBase'
    }, {
        imgSrc: './src/assets/postgresql.svg',
        label: 'Postgresql',
        desc: 'Database'
    }, {
        imgSrc: './src/assets/MongoDB.svg',
        label: 'MongoDB',
        desc: 'Database'
    },
];

const Skill = () => {
    return (
        <section className='section' >
            <div className='container'>
                <h2 className='headline-2 reveal-up'>
                    Essential Tools I use
                </h2>

                <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
                    I have experience with a variety of tools and technologies that help me to build and design full-stack applications. Here are some of the Essential tools i use:
                </p>
                <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) => (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up"/>
                        ))
                    }
                </div> 
            </div>
        </section>
    )
}

export default Skill
