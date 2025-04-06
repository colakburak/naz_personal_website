import styles from '../components/about.module.css';

function About() {
    return (
      <header className={styles.container}>
        <h1 id={styles.name}>Naz Demirsoy</h1>
        {/* <h2 id={styles.jobtitle}>Full Stack Developer</h2> */}
        <p className={styles.paragraph}>
          A Computer Science graduate currently pursuing an MSc in Data Science, with a strong interest in full-stack development and a passion for integrating AI into web and mobile technologies. Experienced in data solutions, server management, and automation.
        </p>
        {/* Contact */}
        <a href="mailto:nazdemirsoyy@gmail.com" className={styles.emailButton}>
          <span className={styles.icon}>&#x2709;</span> Say hi!
        </a>
      </header>
    );
  }
  
  export default About;
  