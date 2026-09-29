import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Education = () => (
  <div>
    <p className={styles.sectionSubText}>Academic background</p>
    <h2 className={styles.sectionHeadText}>Education.</h2>
    <div className='mt-10 grid gap-5 md:grid-cols-2'>
      {education.map(({ institution, degree, date, gpa, icon }) => (
        <div key={institution} className='flex gap-5 rounded-2xl bg-tertiary p-6'>
          <img src={icon} alt='' className='h-14 w-14 rounded-lg object-contain bg-white p-1' />
          <div>
            <h3 className='text-white text-[20px] font-bold'>{institution}</h3>
            <p className='text-white-100 mt-1'>{degree}</p>
            <p className='text-secondary text-[14px] mt-2'>{date} · GPA {gpa}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Education, "education");
