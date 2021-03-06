import React, { createElement, Element } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby-link';
import * as types from './types';

const Text = (props) => {
  const { linkTo, type, ...newProps } = props;

  /**
   * The Text component can renderer both text elements, e.g., <p> and <h1>,
   * and links.
   *
   * If the `linkTo` property is included on the component, the `Link`
   * component from React Router will be rendered.
   */
  let elementType: Link | string;

  if (linkTo) {
    elementType = Link;
  } else {
    elementType = type;
  }

  return createElement(
    elementType,
    Object.assign({
      ...newProps,
      style: newProps.style,
      className: classNames(props.className, {
        'small--block': elementType === types.SMALL
      })
    }, linkTo ? {
      to: linkTo,
      exact: linkTo === '/',
      activeClassName: 'is-active'
    } : {}),
    props.children
  );
};

Text.defaultProps = {
  type: types.BODY
};

export { Text as default, types };
