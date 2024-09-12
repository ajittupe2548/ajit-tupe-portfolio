import Link from 'next/link';
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRegStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';
import { trackData } from '@/utils';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveLink?: string;
    stars: number;
    forks: number;
    lastUpdated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    githubLink,
    liveLink,
    stars,
    forks,
}) => {
    return (
        <div className='relative overflow-hidden h-full rounded-xl bg-card p-6 flex flex-col hoverScale'>
            <h3 className='mb-3 text-2xl font-bold text-primary'>{title}</h3>
            <p className='mb-4  flex-grow'>{description}</p>
            <div className='mt-auto space-y-4'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className='rounded-full bg-pill px-3 py-1 text-xs font-semibold'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className='flex items-center space-x-4'>
                    <span className='flex items-center'>
                        <FaRegStar size={16} className='mr-1' />
                        {stars}
                    </span>
                    <span className='flex items-center'>
                        <FaCodeFork size={16} className='mr-1' />
                        {forks}
                    </span>
                </div>
                <div className='flex justify-between'>
                    <Link
                        href={githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center link transition-colors duration-300'
                        onClick={() => trackData(true, `projects ${title}`, 'github')}
                    >
                        <FaGithub className='mr-1' size={16} />
                        <span className='text-sm'>GitHub</span>
                    </Link>
                    {liveLink && (
                        <Link
                            href={liveLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center link transition-colors duration-300'
                            onClick={() => trackData(true, `projects ${title}`, 'liveDemo')}
                        >
                            <FaExternalLinkAlt className='mr-1' size={16} />
                            <span className='text-sm'>Live Demo</span>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
