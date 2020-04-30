
import styles from './index.less';
import { Menu } from 'antd';
import { connect } from 'dva';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import React, { Component, PureComponent } from 'react'
import { Link } from 'umi';

const { SubMenu } = Menu;

const mapStateToProps = (menu: any) => {
  return menu;
};

class index extends React.PureComponent {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'menu/getMenuData'
    })

  }


  render() {
    const { menu } = this.props;
    const { menusData } = menu;
    console.log(menu);

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          menusData.map((item, index) => {
            return (

              <SubMenu
                key={index}
                title={<span><UserOutlined />{item.name}</span>}
              >
                {
                  item.children && item.children.map((children) => {
                    return (

                      <Menu.Item key={children.url} >
                        <Link to={children.url} key={children.id}>{children.name}</Link>
                      </Menu.Item>

                    )
                  })
                }
              </SubMenu>)
          })
        }
      </Menu>

    )
  }
}

export default connect((menu) => (menu))(index)
