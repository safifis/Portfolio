import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const Tech = () => (
  <div>
    <p className={styles.sectionSubText}>What I use</p>
    <h2 className={styles.sectionHeadText}>Skills.</h2>
    <div className='mt-10 grid gap-5 md:grid-cols-2'>
      {technologies.map(({ category, items }) => (
        <div key={category} className='rounded-2xl bg-tertiary p-6'>
          <h3 className='text-white text-[20px] font-bold'>{category}</h3>
          <div className='mt-4 flex flex-wrap gap-2'>
            {items.map((item) => (
              <span key={item} className='rounded-full bg-black-100 px-3 py-2 text-[14px] text-white-100'>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Tech, "skills");
