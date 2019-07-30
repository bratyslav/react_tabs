import React from 'react';
import PropTypes from 'prop-types';
import { tabs } from './api/tabs';

const Tabs = ({ children, tabNumber, selectTab }) => {
  return (
    <div>
      <h1>{children.length} tabs</h1>

      <div>
        {
          children.map((child, index) => (
            <span
              className={`tab-button ${tabNumber === index ? 'is-active' : ''}`}
              onClick={() => selectTab(index)}
              key={index}
            >
              {child.props.title}
            </span>
          ))
        }
      </div>

      <div className="content" align="justify">
        {children[tabNumber]}
      </div>
    </div>
  );
};

Tabs.Tab = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

tabs.propTypes = {
  tabNumber: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired
};

export default Tabs;