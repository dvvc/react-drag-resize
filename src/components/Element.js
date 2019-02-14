import React from 'react';

const initialState = {
  isDragging: false,
  isResizing: false,
  offsetX: 0,
  offsetY: 0,
  startX: 0,
  startY: 0,
  startYR: 0,
  offsetH: 0,
};

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);

    this.handleMouseDownR = this.handleMouseDownR.bind(this);
    this.handleMouseMoveR = this.handleMouseMoveR.bind(this);
    this.handleMouseUpR = this.handleMouseUpR.bind(this);
  }

  render() {
    let { x, y, w, h, color } = this.props;
    return (
      <div
        className="noselect"
        style={{
          position: 'absolute',
          top: y,
          left: x,
          width: w,
          transform: `translateX(${this.state.offsetX}px) translateY(${this.state.offsetY}px)`,
          height: h + this.state.offsetH,
          backgroundColor: color,
        }}
      >
        <div
          style={{ position: 'absolute', width: '100%', height: '100%' }}
          onMouseDown={this.handleMouseDown}
        />
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'purple',
            width: '100%',
            height: 10,
            bottom: -5,
          }}
          onMouseDown={this.handleMouseDownR}
        />
      </div>
    );
  }

  handleMouseDown(e) {
    if (e.button !== 0) return;
    this.setState({
      isDragging: true,
      offsetX: 0,
      offsetY: 0,
      startX: e.clientX,
      startY: e.clientY,
    });

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove(e) {
    if (!this.state.isDragging) return;
    this.setState({
      offsetX: e.clientX - this.state.startX,
      offsetY: e.clientY - this.state.startY,
    });
  }
  handleMouseUp() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);

    if (this.props.onElementMove) {
      this.props.onElementMove({ id: this.props.id, x: this.state.offsetX, y: this.state.offsetY });
    }
    this.setState({ isDragging: false, offsetX: 0, offsetY: 0 });
  }

  handleMouseDownR(e) {
    this.setState({
      isResizing: true,
      startYR: e.clientY,
      offsetH: 0,
    });
    document.addEventListener('mousemove', this.handleMouseMoveR);
    document.addEventListener('mouseup', this.handleMouseUpR);
  }

  handleMouseUpR() {
    document.removeEventListener('mousemove', this.handleMouseMoveR);
    document.removeEventListener('mouseup', this.handleMouseUpR);

    if (this.props.onElementResize) {
      this.props.onElementResize({ id: this.props.id, h: this.state.offsetH });
    }
    this.setState({ isResizing: false, offsetH: 0 });
  }

  handleMouseMoveR(e) {
    if (!this.state.isResizing) return;
    this.setState({ offsetH: e.clientY - this.state.startYR });
  }
}

export default Element;
