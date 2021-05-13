import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent: React.FC = () => (
  <Footer style={{ textAlign: 'center' }}>
    Refresh Recipes &copy; {new Date().getFullYear()} Created by Nolan Buzanis
  </Footer>
);

export default FooterComponent;
