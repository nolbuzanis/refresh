import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const { Content } = Layout;

const LayoutBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled(Content)`
  flex-grow: 1;
`;

const LayoutWrapper: React.FC = ({ children }) => (
  <LayoutBody>
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </LayoutBody>
);

export default LayoutWrapper;
