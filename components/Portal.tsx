import React from 'react';
import ReactDOM from 'react-dom';

export type PortalProps = {
  children: React.ReactNode;
  markupTo: HTMLElement;
};

/**
 * Use to create a Portals
 */
const Portal: React.FC<PortalProps> = ({ children, markupTo }) =>
  ReactDOM.createPortal(children, markupTo);

export default Portal;
