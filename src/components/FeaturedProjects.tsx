import React from 'react';
import ProjectCard from './ProjectCard';

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
    {
        title: 'Assessment Portal',
        description: 'Unstop challenge : Assessment Portal',
        technologies: ['HTML', 'SCSS', 'Javascript', 'React'],
        githubLink: 'https://github.com/ajittupe2548/assessment-portal',
        liveLink:
            'https://deploy-preview-3--beautiful-pudding-de8a78.netlify.app/',
    },
    {
        title: 'Sync Board',
        description: 'Sync text and draw board for multi user typing',
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
        title: 'Memorise App',
        description: 'Full Stack Memories App',
        technologies: ['React', 'Node', 'MongoDb', 'CSS'],
        githubLink: 'https://github.com/ajittupe2548/MemoriesApp',
        liveLink: '',
    },
];

const ProjectsDisplay: React.FC = () => {
    return (
        <div className='rounded-lg shadow-md md:col-span-2 lg:col-span-3 bg-gray-100 dark:bg-gray-900'>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>Featured Projects</h2>
            </div>
            <div className='grid gap-4 p-4 sm:grid-cols-2'>
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

export default ProjectsDisplay;
