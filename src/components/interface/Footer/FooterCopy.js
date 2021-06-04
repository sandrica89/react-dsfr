import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterCopy = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-footer__bottom-copy', className)}
    {...dataAttributes(remainingProps)}
  >
    {children}
  </div>
);
FooterCopy.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterCopy'),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterCopy.defaultProps = {
  __TYPE: 'FooterCopy',
  className: '',
};

export default FooterCopy;
