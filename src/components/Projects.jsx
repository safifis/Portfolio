import Tilt from "react-parallax-tilt";

import { styles } from "../styles";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ name, description, tags, image, deployed_link }) => (
  <Tilt className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col'>
    <div className='relative w-full h-[230px]'>
      {image ? (
        <img src={image} alt={`${name} project`} className='w-full h-full object-cover rounded-2xl' />
      ) : (
        <div className='w-full h-full rounded-2xl bg-gradient-to-br from-violet-800 via-[#252044] to-[#151030] flex items-center justify-center p-6'>
          <span className='text-white text-center text-[26px] font-bold'>{name}</span>
        </div>
      )}
    </div>

    <div className='mt-5 flex-1'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>
    </div>

    <div className='mt-4 flex flex-wrap gap-2'>
      {tags.map((tag) => (
        <span key={`${name}-${tag}`} className='rounded-full bg-black-100 px-2 py-1 text-[13px] text-white-100'>
          {tag}
        </span>
      ))}
    </div>

    {deployed_link && (
      <a
        href={deployed_link}
        target='_blank'
        rel='noopener noreferrer'
        className='mt-5 self-start text-[#b794ff] font-semibold hover:text-white'
      >
        View project ↗
      </a>
    )}
  </Tilt>
);

const Projects = () => (
  <>
    <p className={styles.sectionSubText}>Selected work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Applications and systems spanning backend APIs, AI workflows, full-stack
      development, and interactive experiences.
    </p>
    <div className='mt-12 flex flex-wrap gap-7'>
      {projects.map((project) => <ProjectCard key={project.name} {...project} />)}
    </div>
  </>
);

export default SectionWrapper(Projects, "project");
