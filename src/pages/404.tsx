import React from 'react';
import { PageProps } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Center = styled.div`
  text-align: center;
  padding-top: 200px;
`;

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <Center>
      <h1>Sorry, page not found!</h1>
    </Center>
  </Layout>
);

export default NotFound;
