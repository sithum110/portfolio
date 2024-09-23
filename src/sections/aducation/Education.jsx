import React, { useState } from 'react';
import styles from './EducationStyles.module.css';

function Education() {
  const [showEducation, setShowEducation] = useState(true);

  const toggleSection = () => {
    setShowEducation(!showEducation);
  };

  return (
    <div className="educationContainer">
      {/* Education and Volunteering Toggle Buttons */}
      <div className={`${styles.sectionButtons} ${styles.textCenter}`}>
        <h1
          className={`${styles.educationBtn} ${styles.toggleButton}`}
          onClick={() => setShowEducation(true)}
        >
          Education
          <span className={styles.underline}></span>
        </h1>
        <span className={styles.separator}>|</span>
        <h1
          className={`${styles.volunteeringBtn} ${styles.toggleButton}`}
          onClick={() => setShowEducation(false)}
        >
          Volunteering
          <span className={styles.underline}></span>
        </h1>
      </div>

      {/* Education Section */}
      {showEducation && (
        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.timeline}>
            {/* Timeline Item 1 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}></div>
              <div className={styles.timelineContent}>
                <h3>G.C.E. Advanced Level | Physical Science Stream</h3>
                <p>ST.Thomas College, Matara (2020)</p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}></div>
              <div className={styles.timelineContent}>
                <h3>International English Language Testing System (5.5)</h3>
                <p> British Council (2021)</p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}></div>
              <div className={styles.timelineContent}>
                <h3>BSc (Hons) in Computing & Information Systems</h3>
                <p>Sabaragamuwa University of Sri Lanka (2022 - Present)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Volunteering Section */}
      {!showEducation && (
        <div className={styles.volunteeringSection}>
          <h2 className={styles.sectionTitle}>Volunteering Experiences</h2>
          <div className={styles.timeline}>
            {/* Timeline Item for Volunteering */}
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}></div>
              <div className={styles.timelineContent}>
                <h3>LetMeHack 3.0 | Program Team Member</h3>
                <p>Society of Computer Science of SUSL</p>
              </div>
            </div>
            {/* Add more volunteering items as necessary */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Education;
