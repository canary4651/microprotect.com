/* @jsx jsx */

import React from 'react';

import { jsx } from '@emotion/core';

import {
  BASE_MQ,
  white,
} from '../styles/constants-v5';

const styles = {
  container: {
    padding: '1em',
    background: white,
    boxShadow: '2px 2px 10px 0 rgba(200, 200, 200, 0.5)',
    [BASE_MQ]: {
      padding: '2em',
    },
  },
};

export default function Box({ style, children }) {
  return (
    <div css={[styles.container, style]}>
      {children}
    </div>
  );
}
