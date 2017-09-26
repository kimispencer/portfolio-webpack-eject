// import React from 'react';
// import Responsive from 'react-responsive';

// const Mobile = ({ children }) => <Responsive maxWidth={640} children={children} />;
// const Tablet = ({ children }) => <Responsive minWidth={641} maxWidth={1024} children={children} />;
// const Desktop = ({ children }) => <Responsive minWidth={10245} children={children} values={process.env.ssr ? {width: 1280} : {}}/>;

const isDesktop = () => window.innerWidth >= 1024;

export { isDesktop };
// export { Desktop, Mobile, Tablet, isDesktop };