import React, { Children } from 'react';
import { Button } from 'antd';
import { Link, history, Redirect } from 'umi';
import { getToken } from '@/utils/localStorage';
import { HttpService } from '@/utils/httpService';

export default function index(props) {
  const { children } = props;
  if (getToken()) {
    HttpService.getApi();
  }
  if (getToken()) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/login"></Redirect>;
  }
}

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
