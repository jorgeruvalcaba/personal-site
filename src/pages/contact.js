import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import Head from '../components/head';

import contactStyles from './contact.module.scss';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Although I'm not currently looking for opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
      <p>Say <a href="mailto:jorgeruvalcabav@gmail.com">Hi</a> or find me on other platforms:</p>
      <div className={contactStyles.linkGroup}>
        <a
          href="https://github.com/jorgeruvalcaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{color: "#000", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
        <a
          href="https://twitter.com/_joruv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{color: "#000", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jorgerauvalcaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{color: "#000", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
        <a
          href="https://codepen.io/jorgeruvalcaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "codepen"]}
            style={{color: "#000", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
      </div>
    </Layout>
  );
}

export default ContactPage;