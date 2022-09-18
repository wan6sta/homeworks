import React from 'react';
import './App.css';
import HW1 from "./src/p2-homeworks/h1/HW1";
import HW2 from './src/p2-homeworks/h2/HW2';
import {TaskList} from './src/myProjects/h2/TaskList';
import HW3 from './src/p2-homeworks/h3/HW3';
import Hello from './src/myProjects/h3/Hello';
import HW4 from './src/p2-homeworks/h4/HW4';
import MYHOMEWORK4 from './src/myProjects/h4/MYHOMEWORK4';

function App() {
  return (
    <div className="App">
      <HW1/>
      <HW2/>
      <TaskList/>
      <HW3/>
      <Hello/>
      <HW4/>
      <MYHOMEWORK4/>
    </div>
  );
}

export default App;
