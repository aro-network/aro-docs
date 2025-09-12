import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const Cards = [
  {
    title: 'Introduction',
    description: 'Get started with ARO Network.',
    to: '/introduction',
  },
  {
    title: 'ARO Network',
    description: 'Core architecture and concepts.',
    to: '/aro-network',
  },
  {
    title: 'Node Operator Guide: Run ARO Nodes',
    description: 'Operate and optimize your nodes.',
    to: '/node-operator-guide',
  },
  {
    title: 'Developer Guide: Build on ARO',
    description: 'Integrate and build with APIs.',
    to: '/developer-guide',
  },
  {
    title: 'Edge Cloud Guide: Explore Edge Solutions',
    description: 'Leverage edge computing.',
    to: '/edge-cloud-guide',
  },
  {
    title: 'Campaign Hub',
    description: 'Testnet, rewards, and programs.',
    to: '/campaign-hub',
  },
  {
    title: '$ARO Tokenomics',
    description: 'Token economics and utility.',
    to: '/aro-tokenomics',
  },
  {
    title: 'Appendix',
    description: 'Useful links and policies.',
    to: '/appendix',
  },
];

function HomepageCards() {
  return (
    <section className={styles.cardsSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Choose Your Guide</h2>
        <div className={styles.cardsGrid}>
          {Cards.map((card, index) => (
            <Link key={index} to={card.to} className={styles.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Home`}
      description="Welcome to ARO Network Documentation">
      <HomepageHeader />
      <main>
        <HomepageCards />
      </main>
    </Layout>
  );
}