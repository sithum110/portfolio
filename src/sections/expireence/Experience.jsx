import styles from './ExperienceStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import { useTheme } from '../../common/ThemeContext';

function Experience() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <img src={checkMarkIcon} alt="Check Mark" />
          <div>
            <h3>Trainee Bank Assistant</h3>
            <p>As a School Leaver Trainee at BOC Matara 2021-2022</p>
            <p>I  immersed myself in diverse aspects of banking operations, focusing on Personal Banking, Communication, and Pawning sections.</p>
          </div>
        </div>
        {/* <div className={styles.experienceItem}>
          <img src={checkMarkIcon} alt="Check Mark" />
          <div>
            <h3>Back-End Developer</h3>
            <p>XYZ Inc., June 2019 - Dec 2020</p>
            <p>Developed server-side logic using Node.js, Express, and MongoDB, focusing on REST APIs.</p>
          </div>
        </div> */}
      </div>
      <hr />
      {/* <div className={styles.experienceList}>
        <div className={styles.experienceItem}>
          <img src={checkMarkIcon} alt="Check Mark" />
          <div>
            <h3>Full Stack Developer</h3>
            <p>DEF Corp., Jan 2018 - May 2019</p>
            <p>Implemented full-stack features using Angular, Node, and MySQL.</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Experience;
