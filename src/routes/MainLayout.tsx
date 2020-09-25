import React, { useState } from 'react';
import { Affix, Dropdown, Layout, Menu } from 'antd';
import styles from 'styles/layout.module.scss';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Svg from '../components/Svg';
import Icon from '../components/Icon';
import useUser from '../hooks/useUser';
import useRoute from '../hooks/useRoute';
import { Routes } from '../store/constants/routes';
import { clearRoute } from 'store/actions/routes';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/user';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const user = useUser();
  const route = useRoute();
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={(e) => e.preventDefault()}>个人信息</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={(e) => e.preventDefault()}>修改密码</a>
      </Menu.Item>
      <Menu.Item onClick={doLogout} danger>
        登出
      </Menu.Item>
    </Menu>
  );

  function doLogout() {
    sessionStorage.clear();
    dispatch(logout());
    dispatch(clearRoute());
    history.push('/login');
  }

  function toggle() {
    setCollapsed(!collapsed);
  }

  const renderMenu = (menu: Routes) => {
    console.log(menu);
    if (menu.children) {
      return (
        <SubMenu
          icon={menu.icon && <Icon name={menu.icon} />}
          key={menu.path}
          title={<span>{menu.name}</span>}
        >
          {menu.children.map((item) => (
            <Menu.Item icon={item.icon && <Icon name={item.icon} />} key={item.path}>
              {item.path && <Link to={item.path}>{item.name}</Link>}
            </Menu.Item>
          ))}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item icon={menu.icon && <Icon name={menu.icon} />} key={menu.path}>
          {menu.path && <Link to={menu.path}>{menu.name}</Link>}
        </Menu.Item>
      );
    }
  };
  return (
    <div>
      <Layout>
        <Affix offsetTop={0}>
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{ minHeight: '100vh' }}
            width={200}
          >
            <div style={{ textAlign: 'center' }}>
              <Svg className={styles.logo} name='logo' height='58px' />
              {!collapsed && (
                <a onClick={() => history.push('/')} style={{ color: '#fff' }}>
                  React管理系统
                </a>
              )}
            </div>
            <Menu selectedKeys={[location.pathname]} theme='dark' mode='inline'>
              {route.map((item) => renderMenu(item))}
            </Menu>
          </Sider>
        </Affix>
        <Layout>
          <Header
            style={{
              background: '#fff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '10px',
            }}
          >
            {collapsed ? (
              <Icon
                style={{ color: '#1890ff', fontSize: '20px' }}
                onClick={toggle}
                name={'MenuUnfoldOutlined'}
              />
            ) : (
              <Icon
                style={{ color: '#1890ff', fontSize: '20px' }}
                onClick={toggle}
                name={'MenuFoldOutlined'}
              />
            )}
            <Dropdown overlay={menu}>
              <a>
                <Icon name='UserOutlined' /> 你好，{user.user.username}
                <Icon name='DownOutlined' />
              </a>
            </Dropdown>
          </Header>
          <Layout>
            <div style={{ margin: '10px 20px' }}>面包屑占位/面包屑占位/面包屑占位</div>
            <Content>
              <div className={styles.content}>{children}</div>
            </Content>
            <Footer> Sona ©{new Date().getFullYear()}</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
