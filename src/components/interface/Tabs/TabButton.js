import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import '../../foundation/icon/icons.css';

const TabButton = forwardRef((props, ref) => {
  const {
    className,
    index,
    activeTab,
    icon,
    label,
    onClickTab,
    onKeyDownTab,
    ...remainingProps
  } = props;

  return (
    <li
      role="presentation"
      {...dataAttributes(remainingProps)}
    >
      <button
        ref={ref}
        type="button"
        role="tab"
        id={`fr-tab-${index}`}
        aria-selected={activeTab === index ? 'true' : 'false'}
        tabIndex={activeTab === index ? 0 : -1}
        aria-controls={`fr-tabpanel-${index}`}
        className={classNames('fr-tabs__tab', {
          'fr-tabs__tab--icon-left': icon,
        })}
        onClick={() => onClickTab(index)}
        onKeyDown={(e) => onKeyDownTab(e, index)}
      >
        {icon && (
        <i className={classNames({ [icon]: icon })} />
        )}
        {label}
      </button>
    </li>
  );
});

TabButton.defaultProps = {
  className: '',
  icon: '',
};

TabButton.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  onClickTab: PropTypes.func.isRequired,
  onKeyDownTab: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  index: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default TabButton;
