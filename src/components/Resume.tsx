import React from 'react';
import resumeData from '../data/resumeDtata.json';
import heroImage from '@/assets/Ajit.jpg';
import Image from 'next/image';
import { FaEnvelope, FaCheck } from 'react-icons/fa';
import Link from 'next/link';

// Interfaces
interface PersonalInfo {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    github: string;
    linkedin: string;
    website: string;
    summary: string;
}

interface ExperienceItem {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface EducationItem {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Language {
    language: string;
    proficiency: string;
}

interface Project {
    name: string;
    description: string;
    technologies: string[];
    link: string;
}

// Header Component
const Header: React.FC<{ personalInfo: PersonalInfo }> = ({ personalInfo }) => (
    <header className='mb-2 flex flex-col md:flex-row items-center p-6 border-b-2 border-gray-200 dark:border-gray-700'>
        <div className='md:mr-8 mb-4 md:mb-0'>
            <Image
                src={heroImage || '/default-profile.jpg'}
                alt={personalInfo.name}
                width={200}
                height={200}
                className='rounded-full border-4 border-gray-300 dark:border-gray-600'
            />
        </div>
        <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold mb-2 text-black dark:text-white'>
                {personalInfo.name}
            </h1>
            <h2 className='text-2xl text-gray-600 dark:text-gray-300 mb-4'>
                {personalInfo.title}
            </h2>
            <div className='flex flex-wrap justify-center md:justify-start gap-4 mb-4'>
                <Link
                    href={`mailto:${personalInfo.email}`}
                    className='flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                    <FaEnvelope size={20} className='mr-2' />
                    {personalInfo.email}
                </Link>
                <Link
                    href={personalInfo.linkedin}
                    className='flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                    {personalInfo.linkedin}
                </Link>
                <Link
                    href={personalInfo.github}
                    className='flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
                >
                    {personalInfo.github}
                </Link>
            </div>
        </div>
    </header>
);

// Experience Component
const Experience: React.FC<{ experience: ExperienceItem[] }> = ({
    experience,
}) => (
    <section className='mb-2 p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Experience</h2>
        {experience.map((item, index) => (
            <div key={index} className='mb-6'>
                <h3 className='text-xl font-semibold'>{item.position}</h3>
                <p className='text-lg text-gray-600'>{item.company}</p>
                <p className='text-sm text-gray-500 mb-2'>
                    {item.startDate} - {item.endDate}
                </p>
                <p>{item.description}</p>
            </div>
        ))}
    </section>
);

// Education Component
const Education: React.FC<{ education: EducationItem[] }> = ({ education }) => (
    <section className='mb-2 p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Education</h2>
        {education.map((item, index) => (
            <div key={index} className='mb-6'>
                <h3 className='text-xl font-semibold'>{item.degree}</h3>
                <p className='text-lg text-gray-600'>{item.institution}</p>
                <p className='text-sm text-gray-500 mb-2'>
                    {item.startDate} - {item.endDate}
                </p>
                <p>{item.description}</p>
            </div>
        ))}
    </section>
);

// Skills Component
const Skills: React.FC<{ skills: string[] }> = ({ skills }) => (
    <section className='mb-2 p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Skills</h2>
        <div className='flex flex-wrap gap-4'>
            {skills.map((skill, index) => (
                <span
                    key={index}
                    className='border border-gray-300 text-gray-700 px-3 py-1 rounded-full text-md font-medium'
                >
                    {skill}
                </span>
            ))}
        </div>
    </section>
);

// Languages Component
const Languages: React.FC<{ languages: Language[] }> = ({ languages }) => (
    <section className='mb-2 p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Languages</h2>
        <ul className='space-y-2'>
            {languages.map((lang, index) => (
                <li key={index} className='flex items-center justify-between'>
                    <span className='font-medium'>{lang.language}</span>
                    <span className='text-gray-600 border border-gray-300 px-2 py-1 rounded-full text-sm'>
                        {lang.proficiency}
                    </span>
                </li>
            ))}
        </ul>
    </section>
);

// Projects Component
const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => (
    <section className='mb-2 p-6 border-b-2 border-gray-200'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Projects</h2>
        {projects.map((project, index) => (
            <div key={index} className='mb-6'>
                <h3 className='text-xl font-semibold'>
                    <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-600 hover:underline'
                    >
                        {project.name}
                    </a>
                </h3>
                <p className='mb-2'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                    {project.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className='border border-gray-300 text-gray-600 px-2 py-1 rounded-full text-xs font-medium'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        ))}
    </section>
);

// Interests Component
const Interests: React.FC<{ interests: string[] }> = ({ interests }) => (
    <section className='p-6'>
        <h2 className='text-2xl font-bold mb-4 pb-2'>Interests</h2>
        <ul className='grid grid-cols-2 gap-2'>
            {interests.map((interest, index) => (
                <li key={index} className='flex items-center'>
                    <FaCheck className='mr-2' size={16} />
                    <span>{interest}</span>
                </li>
            ))}
        </ul>
    </section>
);

// Main Resume Component
const Resume: React.FC = () => {
    return (
        <div
            id='resume'
            className='mx-auto mb-10 p-2 text-black dark:text-white bg-white dark:bg-gray-900 print:bg-white print:text-black'
        >
            <Header personalInfo={resumeData.personalInfo} />

            <section className='mb-2 print:mb-4 p-6 border-b-2 border-gray-200 dark:border-gray-700'>
                <h2 className='text-2xl font-bold mb-4 pb-2 print:text-xl'>
                    Summary
                </h2>
                <p className='print:text-gray-800 dark:text-gray-300'>
                    {resumeData.personalInfo.summary}
                </p>
            </section>

            <Experience experience={resumeData.experience} />
            <Education education={resumeData.education} />
            <Projects projects={resumeData.projects} />

            <div className='grid md:grid-cols-2 gap-8 print:gap-4'>
                <Skills skills={resumeData.skills} />
                <div>
                    <Languages languages={resumeData.languages} />
                    <Interests interests={resumeData.interests} />
                </div>
            </div>
        </div>
    );
};

export default Resume;
