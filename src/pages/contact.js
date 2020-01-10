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
      <p>I'm currently looking for my next gig, so my inbox is open. My background is as software engineer so feel free to reach out to me if you have an interesting position or just to say hi, I'll answer you ASAP!</p>
      <p>Say <a href="mailto:jorgeruvalcabav@gmail.com">Hi</a> or find me on other platforms:</p>
      <div className={contactStyles.linkGroup}>
        <a
          href="https://github.com/jorgeruvalcaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{color: "#FFF", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
        <a
          href="https://twitter.com/jorgearuv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{color: "#FFF", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jorge-ruvalcaba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{color: "#FFF", marginRight: "1.5rem"}}
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
            style={{color: "#FFF", marginRight: "1.5rem"}}
            size="2x"
          />
        </a>
      </div>
    </Layout>
  );
}

export default ContactPage;
