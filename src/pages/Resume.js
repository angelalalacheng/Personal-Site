import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
// import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
// import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  // 'Skills',
  // 'Courses',
  // 'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Smile Identity, Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
<<<<<<< HEAD
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
=======
      <Education data={degrees} />
      <Experience data={positions} />
      {/* <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References /> */}

>>>>>>> 9e796d0 (1001 update)
    </article>
  </Main>
);

export default Resume;
