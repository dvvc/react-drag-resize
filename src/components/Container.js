import React from 'react';

import Element from './Element';

const Container = ({ style, elements, onElementMove, onElementResize }) => (
  <div style={style}>
    {elements.map((e, i) => (
      <Element key={i} {...e} onElementMove={onElementMove} onElementResize={onElementResize} />
    ))}
  </div>
);

export default Container;
