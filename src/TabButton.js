import React from 'react';
import PropTypes from 'prop-types';
const classNames = require('classnames');

const TabButton = ({ tab, onTabSelected, currentTab }) => {
  const tabButtonClass = classNames({
    'tab-button': true,
    'is-active': tab.title === currentTab,
  });

  return (
    <span
      onClick={() => onTabSelected(tab.title)}
      className={tabButtonClass}
    >
      {tab.title}
    </span>
  );
};

TabButton.propTypes = {
  tab: PropTypes.object.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired
};


export default TabButton;