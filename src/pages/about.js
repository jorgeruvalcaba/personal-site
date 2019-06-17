import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import Head from '../components/head';

import aboutStyles from './about.module.scss';
import GraphQLIcon from '../images/graphql.svg';
import ExpressIcon from '../images/expressjs.svg';
import MongoDBIcon from '../images/mongodb.svg';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>Hello! I'm Jorge, a software engineer who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
      <p>I joined the engineering team at <a href="https://scalablepress.com/" target="_blank" rel="noopener noreferrer">Scalable Press</a> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
      <p>Here's a few technologies I've been working with recently:</p>
      <ul className={aboutStyles.techList}>
        <li>
          <FontAwesomeIcon icon={["fab", "js-square"]} style={{color:"#F0DB4F"}} /> JavaScript (ES6+)
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "react"]} style={{color:"#00D8FF"}} /> React
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "node-js"]} style={{color:"#6CC24A"}} /> Node.js
        </li>
        <li>
          <GraphQLIcon className={aboutStyles.svgIcon} /> GraphQL
        </li>
        <li>
          <FontAwesomeIcon icon={["fab", "html5"]} style={{color:"#E34F26"}} /> HTML5 & <FontAwesomeIcon icon={["fab", "sass"]} style={{color:"#CD6799"}} /> (S)CSS
        </li>
        <li>
          <ExpressIcon className={aboutStyles.svgIcon} /> Express
        </li>
        <li>
          <MongoDBIcon className={aboutStyles.svgIcon} /> MongoDB
        </li>
      </ul>
      <p>Do you have a request? Just want to say hi? Let's chat. Check my <Link to="/contact">contact details</Link>.</p>
    </Layout>
  );
}

export default AboutPage;