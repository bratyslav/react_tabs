import React from 'react';
import './App.css';
import { tabs } from './api/tabs';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabNumber: 0
  };

  selectTab = (tabNumber) => {
    this.setState({ tabNumber: tabNumber });
  };

  render() {
    return (
      <Tabs tabNumber={this.state.tabNumber} selectTab={this.selectTab} >
        {
          tabs.map(tab => (
            <Tabs.Tab
              title={tab.title}
              key={tab.title}
            >
              {tab.content}
            </Tabs.Tab>
          ))
        }
      </Tabs>
    );
  };
};

export default App;
