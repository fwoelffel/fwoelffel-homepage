import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './social-links.module.scss';

const SocialLinks = ({ size = '2.5em' }) => (
  <div className='is-block'>
    <a
      className={styles.socialLink}
      href='https://www.linkedin.com/in/fredericwoelffel/'
      target='_blank'
      rel='noopener noreferrer'>
      <FaLinkedin size={size} />
    </a>
    <a
      className={styles.socialLink}
      href='https://twitter.com/fwoelffel'
      target='_blank'
      rel='noopener noreferrer'>
      <FaTwitter size={size} />
    </a>
    <a
      className={styles.socialLink}
      href='https://github.com/fwoelffel'
      target='_blank'
      rel='noopener noreferrer'>
      <FaGithub size={size} />
    </a>
    <a
      className={styles.socialLink}
      href='https://frdricwoelffel.typeform.com/to/TgRdLj'
      target='_blank'
      rel='noopener noreferrer'>
      <FaEnvelope size={size} />
    </a>
  </div>
);

export default SocialLinks;
