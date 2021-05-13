import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'gatsby';

const { Header } = Layout;

const Routes = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Contact',
    to: '/contact',
  },
  {
    text: 'Tags',
    to: '/tags',
  },
  {
    text: 'Recipes',
    to: '/recipes',
  },
];

const HeaderComponent: React.FC = () => (
  <Header>
    <div className="logo" />
    <Menu mode="horizontal" defaultSelectedKeys={['2']}>
      {Routes.map(({ text, to }) => (
        <Menu.Item key={text + to}>
          <Link to={to}>{text}</Link>
        </Menu.Item>
      ))}
    </Menu>
  </Header>
);

export default HeaderComponent;
