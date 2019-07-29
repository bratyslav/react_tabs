import React from 'react';
import TabButton from './TabButton';
import PropTypes from 'prop-types';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { tabs, defaultIndex } = this.props;

    this.state = {
      currentTab: tabs[defaultIndex].title
    };
  };

  onTabSelected = (title) => {
    this.setState({ currentTab: title });
  };

  render() {
    const { tabs } = this.props;
    const { currentTab } = this.state;

    return (
      <div>
        <h1>{tabs.length} tabs</h1>

        <section>
          {tabs.map(tab => (
            <TabButton
              tab={tab}
              onTabSelected={this.onTabSelected}
              currentTab={currentTab}
              key={tab.title}
            />
          ))}
        </section>
  
        <section className="content" align="justify">
          {tabs.find(tab => tab.title === currentTab).content}
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