import React from 'react';
import ProjectCard from './ProjectCard';
import SubHeading from './SubHeading';

export interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink: string;
    stars: number;
    forks: number;
    lastUpdated: string;
}

const projects: Omit<ProjectCardProps, 'stars' | 'forks' | 'lastUpdated'>[] = [
    // {
    //     title: 'Assessment Portal',
    //     description: 'Unstop challenge : Assessment Portal',
    //     technologies: ['HTML', 'SCSS', 'Javascript', 'React'],
    //     githubLink: 'https://github.com/ajittupe2548/assessment-portal',
    //     liveLink:
    //         'https://deploy-preview-3--beautiful-pudding-de8a78.netlify.app/',
    // },
    {
        title: 'Sync Board',
        description:
            'Developed and integrated real-time text update & draw board functionality, enabling seamless collaboration and instant feedback across the platform.',
        technologies: [
            'HTML',
            'SCSS',
            'Javascript',
            'React',
            'Tailwind CSS',
            'Socket',
            'Node',
        ],
        githubLink: 'https://github.com/ajittupe2548/sync-board-client',
        liveLink: 'https://sync-board-client.vercel.app/',
    },
    {
        title: 'Memories App',
        description:
            'A fully responsive Memories app using MERN stack with guidance from the JavaScript Mastery YouTube channel.',
        technologies: ['React', 'Node', 'MongoDb', 'CSS', 'Express'],
        githubLink: 'https://github.com/ajittupe2548/MemoriesApp',
        liveLink: '',
    },
];

const Projects: React.FC = () => {
    return (
        <div className='pt-16' id='projects'>
            <SubHeading>Projects</SubHeading>
            <div className='grid gap-6 sm:grid-cols-2'>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        {...project}
                        stars={0}
                        forks={0}
                        lastUpdated={new Date().toISOString()}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
