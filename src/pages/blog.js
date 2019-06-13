import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate
          order: DESC
        }
        filter: {node_locale: {eq: "en-US"}}
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li key={edge.node.slug} className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}

export default BlogPage;