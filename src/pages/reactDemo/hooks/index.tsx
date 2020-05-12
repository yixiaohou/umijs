import React, { useState, useEffect, createContext, useContext } from 'react';
import { Button } from 'antd';
import Child from './child';

export const CountContext = createContext(0);

export default function index() {
  const [count, setCount] = useState(1);
  let [name, setName] = useState('张三');
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  //   console.log(`useEffect=>You clicked ${name} times`);
  //   return () => {
  //     console.log('老弟，你走了!Index页面')
  //   }
  // })
  //

  return (
    <div>
      <p>统计{count}</p>
      <Button
        onClick={() => {
          setCount(count * 10);
        }}
      >
        点击
      </Button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>

      <br />
      <p>名称{name}</p>
      <Button
        onClick={() => {
          setName(name + 'esss');
        }}
      >
        点击
      </Button>
    </div>
  );
}
