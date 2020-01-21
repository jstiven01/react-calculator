import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div>
      <div className="row-buttons" id="group-1">
        <Button buttonName="AC" color="gray" />
        <Button buttonName="+/-" color="gray" />
        <Button buttonName="%" color="gray" />
        <Button buttonName="÷" />
      </div>
      <div className="row-buttons" id="group-2">
        <Button buttonName="7" color="gray" />
        <Button buttonName="8" color="gray" />
        <Button buttonName="9" color="gray" />
        <Button buttonName="X" />
      </div>
      <div className="row-buttons" id="group-3">
        <Button buttonName="4" color="gray" />
        <Button buttonName="5" color="gray" />
        <Button buttonName="6" color="gray" />
        <Button buttonName="-" />

      </div>
      <div className="row-buttons" id="group-4">
        <Button buttonName="1" color="gray" />
        <Button buttonName="2" color="gray" />
        <Button buttonName="3" color="gray" />
        <Button buttonName="+" />
      </div>
      <div className="row-buttons" id="group-5">
        <Button buttonName="0" color="gray" wide />
        <Button buttonName="." color="gray" />
        <Button buttonName="=" />
      </div>
    </div>

  );
}

export default ButtonPanel;
