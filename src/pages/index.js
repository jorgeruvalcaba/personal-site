import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hello, I'm Jorge.</h1>
      <h2>I build things for the web.</h2>
      <p>I'm a software engineer based in Guadalajara, México specializing in building (and occasionally designing) exceptional, high-quality websites and applications.</p>
      <a href="mailto:jorgeruvalcabav@gmail.com">Get In Touch</a>
    </Layout>
  );
}

export default IndexPage;