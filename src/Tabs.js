import React from 'react';
import TabButton from './TabButton';
import PropTypes from 'prop-types';
import { tabs } from './api/tabs';

const Tabs = ({ match }) => {
  const tab = tabs.find(tab => tab.id == match.params.tabId);
  // '==' потому что число сравнивается с строкой
  const currentTab = tab || '';

  return (
    <div>
      <h1>{tabs.length} tabs</h1>

      <section>
        {tabs.map(tab => (
          <TabButton
            tab={tab}
            isCurrent={currentTab.id === tab.id}
            key={tab.id}
          />
        ))}
      </section>

      <section className="content" align="justify">
        {currentTab.content}
      </section>
    </div>
  );
};

Tabs.propTypes = {
  match: PropTypes.object.isRequired
};

export default Tabs;