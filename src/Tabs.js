import React from 'react';
import TabButton from './TabButton';
import PropTypes from 'prop-types';
import { tabs } from './api/tabs';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const tab = tabs.find(tab => tab.title === match.params.tabTitle);

    this.state = {
      currentTab: tab ? tab.title : ''
    };
  };

  render() {
    const { match } = this.props;
    const { currentTab } = this.state;

    return (
      <div>
        <h1>{tabs.length} tabs</h1>

        <section>
          {tabs.map(tab => (
            <TabButton
              tab={tab}
              currentTab={currentTab}
              key={tab.title}
            />
          ))}
        </section>
  
        <section className="content" align="justify">
          {
            match.params.tabTitle
              ? tabs.find(tab => tab.title === match.params.tabTitle).content
              : ''
          }
        </section>
      </div>
    );
  };
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  defaultIndex: PropTypes.number.isRequired
};

export default Tabs;