// src/components/CardGroup.jsx
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './CardGroup.module.css';

export default function CardGroup() {
  return (
    <div className={styles.cardGroup}>
      <Link className={styles.card} to="/technologies/architecture">
        <h3>Learn</h3>
        <p>Discover the fundamentals of ARO Network and its underlying technologies.</p>
      </Link>
      <Link className={styles.card} to="https://dashboard.aro.network/signup" target="_blank" rel="noopener noreferrer">
        <h3>Start Earning</h3>
        <p>Get paid by contributing to the ARO Network ecosystem.</p>
      </Link>
      <Link className={styles.card} to="/user-guides/run-node">
        <h3>User Guides</h3>
        <p>Step-by-step guides to set up and run ARO Nodes.</p>
      </Link>
      <Link className={styles.card} to="/campaigns/previewnet">
        <h3>Campaigns</h3>
        <p>Join exciting initiatives and campaigns on ARO Network.</p>
      </Link>
    </div>
  );
}


