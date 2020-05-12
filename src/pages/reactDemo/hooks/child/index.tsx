import React, { useState, createContext, useContext } from 'react';
import { CountContext } from '../index';
export default function index(props) {
  const count = useContext(CountContext); //一句话就可以得到count
  return <h2>111{count}</h2>;
}
