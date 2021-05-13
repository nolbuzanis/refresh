import React from 'react';
import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';

const { Content } = Layout;

const LayoutWrapper: React.FC = ({ children }) => (
  <>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </>
);

export default LayoutWrapper;
