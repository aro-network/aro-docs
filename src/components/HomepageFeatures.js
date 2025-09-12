import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (<>ARO Network is built with Docusaurus.</>),
  },
  {
    title: 'Focus on What Matters',
    description: (<>Share your docs with your team.</>),
  },
  {
    title: 'Powered by React',
    description: (<>Extend or customize your site layout.</>),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--md')}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}