import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../components/Card.module.css';

const CardList = [
  {
    title: 'Learn',
    description: 'Discover the fundamentals of the ARO Network and its underlying technologies.',
    to: '/aro-network/aro-overview',
  },
  {
    title: 'Node Operators',
    description: 'Get paid by contributing edge resources to the network!',
    to: '/node-operator-guide/become-operator/choose-node',
  },
  {
    title: 'Campaigns',
    description: 'Be an ARONAUT and join exciting community initiatives.',
    to: '/campaign-hub/aro-testnet',
  },
  {
    title: 'Useful Links',
    description: 'Find official links and don’t get lost!',
    to: '/appendix/useful-links',
  },
];

function Card({ title, description, to }) {
  return (
    <Link to={to} className={clsx('card', styles.card)}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout title="ARO Network Docs" description="Documentation for ARO Network">
      <main className={styles.cardContainer}>
        <div className={styles.cardGrid}>
          {CardList.map((props, idx) => (
            <Card key={idx} {...props} />
          ))}
        </div>
      </main>
    </Layout>
  );
}