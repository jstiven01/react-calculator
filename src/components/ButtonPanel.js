import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    const { clickHandler } = this.props;
    return clickHandler(buttonName);
  }

  render() {
    return (
      <div>
        <div className="row-buttons" id="group-1">
          <Button buttonName="AC" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="+/-" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="%" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="÷" clickHandler={this.handleClick} />
        </div>
        <div className="row-buttons" id="group-2">
          <Button buttonName="7" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="8" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="9" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="X" clickHandler={this.handleClick} />
        </div>
        <div className="row-buttons" id="group-3">
          <Button buttonName="4" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="5" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="6" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="-" clickHandler={this.handleClick} />

        </div>
        <div className="row-buttons" id="group-4">
          <Button buttonName="1" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="2" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="3" color="gray" clickHandler={this.handleClick} />
          <Button buttonName="+" clickHandler={this.handleClick} />
        </div>
        <div className="row-buttons" id="group-5">
          <Button buttonName="0" color="gray" wide clickHandler={this.handleClick} />
          <Button buttonName="." color="gray" clickHandler={this.handleClick} />
          <Button buttonName="=" clickHandler={this.handleClick} />
        </div>
      </div>

    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
