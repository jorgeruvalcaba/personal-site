import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>contact details live here</p>
      <p>Check my <a href="https://twitter.com/_joruv">twitter profile</a></p>
    </Layout>
  );
}

export default ContactPage;