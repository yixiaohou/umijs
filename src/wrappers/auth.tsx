import React, { Children } from 'react';
import { Button } from 'antd';
import { Link, history, Redirect } from 'umi';
import {
  getToken,
  getTimeout,
  setUserInfo,
  cleanLoginInfo,
} from '@/utils/localStorage';
import { HttpService } from '@/utils/httpService';

export default function index(props) {
  const { children } = props;
  if (getToken() && isLogin()) {
    HttpService.getApi()?.then(res => {
      console.log(res);
      HttpService.apiTokenValidate?.requset()?.then(res1 => {
        console.log(res1);
        setUserInfo(res1);
      });
    });
  }
  if (getToken() && isLogin()) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}

const isLogin = () => {
  const token = getToken();
  const to = getTimeout() * 1000;
  const now = Date.now();
  if (!token || !to || to - now <= 0) {
    cleanLoginInfo();
    return false;
  }
};

// import React, { Children, Fragment } from 'react';
// import { Button } from 'antd';
// import { Link, history, Redirect } from 'umi';
// import { getToken } from '@/utils/localStorage';
// import { HttpService } from '@/utils/httpService';

// export default class index extends React.Component {
//   hasToken = !!getToken();
//   // state = {
//   //   node: null,
//   //   init: false
//   // }
//   constructor(props) {
//     super(props);

//     this.state = {
//       node: null,
//       init: false
//     }
//   }

//   componentDidMount() {
//     if (this.hasToken) {
//       HttpService.getApi()?.then((res) => {
//         console.log(res);
//         if (res) {
//           this.setState({
//             node: this.props.children,
//             init: true
//           })
//         }
//       })
//     }
//   }

//   render() {
//     return <>{this.hasToken ? this.state.node : <Redirect to='/login'></Redirect>}</>
//   }
// }
