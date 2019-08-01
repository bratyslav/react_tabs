import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
const classNames = require('classnames');

const TabButton = ({ tab, isCurrent }) => {
  const tabButtonClass = classNames({
    'tab-button': true,
    'tab-button__is-active': isCurrent
  });

  return (
    <NavLink to={`/tabs/${tab.id}`}>
      <span className={tabButtonClass} >
        {tab.title}
      </span>
    </NavLink>
  );
};

TabButton.propTypes = {
  tab: PropTypes.object.isRequired,
  isCurrent: PropTypes.bool.isRequired
};


export default TabButton;