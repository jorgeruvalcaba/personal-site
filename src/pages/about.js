import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>Here will live my bio</p>
      <p>You can see my contact details <Link to="/contact">here</Link></p>
    </Layout>
  );
}

export default AboutPage;