import React from 'react';
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTypescript } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { VscVscode } from 'react-icons/vsc';

const skills = [
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3 />, name: 'CSS' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <RiNextjsFill />, name: 'Next.js' },
    { icon: <RiTailwindCssFill />, name: 'Tailwind CSS' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <BiLogoMongodb />, name: 'MongoDB' },
    { icon: <DiMysql />, name: 'MySQL' },
    { icon: <FaGit />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' },
    { icon: <VscVscode />, name: 'VS Code' },
];

const Skills: React.FC = () => {
    return (
        <div
            className='p-6 rounded-xl md:col-span-2 transition-all duration-300 flex-grow pt-16'
            id='skills'
        >
            <h2 className='text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center'>
                Skills
            </h2>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className='flex flex-col items-center p-4 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transform'
                    >
                        <div className='text-gray-600 dark:text-gray-300 mb-2'>
                            {React.cloneElement(skill.icon, { size: 24 })}
                        </div>
                        <span className='text-sm font-medium text-gray-700 dark:text-gray-300 text-center'>
                            {skill.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
