import React from 'react';
import Responsive from 'react-responsive';
import deviseSizes from './deviceSizes';

export const Mobile = props => <Responsive {...props} maxWidth={deviseSizes.mobileMaxWidth} />;
export const Desktop = props => <Responsive {...props} minWidth={deviseSizes.desktopMinWidth} />;