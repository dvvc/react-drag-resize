import React from 'react';

import Container from './Container';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.handleElementMove = this.handleElementMove.bind(this);
    this.handleElementResize = this.handleElementResize.bind(this);

    this.state = {
      elements: [
        { id: 1, x: 0, y: 0, w: 100, h: 100, color: 'red' },
        { id: 2, x: 100, y: 100, w: 40, h: 60, color: 'blue' },
      ],
    };
  }

  render() {
    return (
      <Container
        style={{ width: 600, height: 600, position: 'absolute', border: 'solid thin black' }}
        elements={this.state.elements}
        onElementMove={this.handleElementMove}
        onElementResize={this.handleElementResize}
      />
    );
  }

  updateElement(id, params) {
    let elementIndex = this.state.elements.findIndex(e => e.id === id);
    let elements = Array.from(this.state.elements);

    let updatedElement = elements[elementIndex];
    Object.keys(params).forEach(k => {
      updatedElement[k] = updatedElement[k] + params[k];
    });

    elements.splice(elementIndex, 1, updatedElement);
    this.setState({ elements });
  }

  handleElementMove({ id, x, y }) {
    this.updateElement(id, { x, y });
  }

  handleElementResize({ id, h }) {
    this.updateElement(id, { h });
  }
}

export default Demo;
