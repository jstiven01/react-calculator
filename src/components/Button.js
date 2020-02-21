import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useSpring, animated } from 'react-spring';
import 'typeface-roboto';
import { Typography } from '@material-ui/core';


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const ButtonCalc = ({
  color, buttonName, wide, clickHandler,
}) => {
  const handleClick = () => clickHandler(buttonName);

  let classWide = '';
  let propButton = 'contained';
  if (wide) classWide = 'wide-twice';
  if (color === 'orange') propButton = 'outlined';
  const [props, set] = useSpring(() => (
    { xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }
  ));
  const { xys } = props;

  return (
    <Button
      className={`color-button-${color} ${classWide}`}
      type="button"
      onClick={handleClick}
      color="primary"
      variant={propButton}
    >
      <animated.div
        class="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: xys.interpolate(trans) }}
      >

        <Typography variant="h3">{buttonName}</Typography>
      </animated.div>

    </Button>
  );
};

ButtonCalc.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
  xys: PropTypes.shape({
    interpolate: PropTypes.func,
  }).isRequired,
};

ButtonCalc.defaultProps = {
  color: 'orange',
  wide: false,
};

export default ButtonCalc;
