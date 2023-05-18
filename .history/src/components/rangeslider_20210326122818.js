import React from 'react';
import styled from 'styled-components';

const sliderThumbStyles = (props) => (`
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 2px solid white;
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 14px;
    color: white;
    margin-left: 5px;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

class Rangeslider extends React.Component {
  state = {
    value: 0
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })

  render() {
    return (
      <Styles opacity={this.state.value > 10 ? (this.state.value / 1000) : .1} color={this.props.color}>
        <input type="range" min={0} max={10000} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        <div className="value">{this.state.value}</div>
      </Styles>
    )
  }
}

export default Rangeslider