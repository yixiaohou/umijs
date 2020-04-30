import React from 'react';
import styles from './index.less';
import { Breadcrumb } from 'antd';
import { Link } from 'umi';

export default (props) => {
  const { location, route } = props;
  const { pathname } = location;
  const { routes } = route;
  let path = pathname.split('/');
  let bread = [{ title: "Home" }];
  routes.map((item) => {
    if (item.path === '/' + path[1]) {
      bread.push(item)
    }
    if (item.routes) {
      let arr = item.routes.filter(child => child.path === pathname)
      bread = [...bread, ...arr];
    }
  });


  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          bread.map((item: any) => (
            <Breadcrumb.Item>
              <Link to={item.path}>
                {item.title}
              </Link>

            </Breadcrumb.Item>
          ))
        }
        {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item> */}
      </Breadcrumb>
    </div>
  );
}