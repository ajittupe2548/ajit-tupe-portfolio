import Link from 'next/link';
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaRegStar } from 'react-icons/fa';
import { FaCodeFork } from 'react-icons/fa6';

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
        <div className='relative overflow-hidden rounded-xl p-1 transition-all duration-500'>
            <div className='absolute inset-0 bg-secondary transition-all duration-500'></div>
            <div className='relative h-full rounded-lg bg-primary-light p-6 transition-all duration-500 flex flex-col'>
                <h3 className='mb-3 text-2xl font-bold'>{title}</h3>
                <p className='mb-4  flex-grow'>{description}</p>
                <div className='mt-auto space-y-4'>
                    <div className='flex flex-wrap gap-2'>
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className='rounded-full bg-primary-lightest dark:bg-primary-dark px-3 py-1 text-xs font-semibold'
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
                            className='flex items-center text-tertiary transition-colors duration-300'
                        >
                            <FaGithub className='mr-1' size={16} />
                            <span className='text-sm'>GitHub</span>
                        </Link>
                        {liveLink && (
                            <Link
                                href={liveLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center text-tertiary transition-colors duration-300'
                            >
                                <FaExternalLinkAlt className='mr-1' size={16} />
                                <span className='text-sm'>Live Demo</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
