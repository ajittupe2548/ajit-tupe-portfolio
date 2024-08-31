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
import SubHeading from './SubHeading';

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
        <div className='pt-16' id='skills'>
            <SubHeading>Skills</SubHeading>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className='flex flex-col items-center p-4 rounded-lg bg-primary-light transition-all duration-300 hover:scale-105'
                    >
                        <div className='mb-2'>
                            {React.cloneElement(skill.icon, { size: 24 })}
                        </div>
                        <span className='text-sm'>{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skills;
