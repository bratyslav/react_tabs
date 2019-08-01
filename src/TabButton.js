import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const classNames = require('classnames');

const TabButton = ({ tab, currentTab }) => {
  const tabButtonClass = classNames({
    'tab-button': true,
    'tab-button__is-active': tab.title === currentTab
  });

  return (
    <NavLink to={`/tabs/${tab.title}`}>
      <span className={tabButtonClass} >
        {tab.title}
      </span>
    </NavLink>
  );
};

TabButton.propTypes = {
  tab: PropTypes.object.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired
};


export default TabButton;