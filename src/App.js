import React from 'react';
import './App.css';
import { tabs } from './api/tabs';
import Tabs from './Tabs';

const App = () => (
  <Tabs tabs={tabs} defaultIndex={0} />
);

export default App;
