import React from 'react';

/* Material ui components */
import Tooltip from '@material-ui/core/Tooltip';

/* Images */
import rainbowToken from '../../static/svg/CircleTokenRainbow.svg';

const MyToken = ({
  color,
  size,
  boxShadowSize,
  borderSize,
  score,
  radius,
  strokeWidth
}) => {
  const parenthesisString = `(${color.r}, ${color.g}, ${color.b})`;
  const tokenWrapperStyle = {
    position: 'relative',
  };
  const tokenStyle = {
    backgroundImage: `url(${rainbowToken})`,
    backgroundColor: `rgb${parenthesisString}`,
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    marginLeft: `${strokeWidth}px`,
    marginTop: `${strokeWidth}px`,
    zIndex: 30,
  }
  const scoreBorderStyle = {
    zIndex: 29,
    position: 'absolute',
    top: 0,
    width: `${2 * Number(radius) + Number(strokeWidth)}px`,
    height: `${2 * Number(radius) + Number(strokeWidth)}px`,
    transform: 'rotate(-90deg)',
  };
  const strokeDasharray = 2 * radius * Math.PI;
  const strokeDashoffset = (1 - score / 100) * strokeDasharray;
  const bComponent = (1 - score / 100) * 255;
  const gComponent = score / 100 * 255;
  const circleStyle = {
    zIndex: 29,
    r: radius,
    cx: Number(radius) + Number(strokeWidth) / 2,
    cy: Number(radius) + Number(strokeWidth) / 2,
    strokeDasharray,
    strokeWidth: `${strokeWidth}px`,
    strokeDashoffset,
    stroke: `rgb(0, ${gComponent}, ${bComponent})`,
  };
  // const gradient = (
  //   <defs>
  //     <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
  //       <stop offset="0%" stopColor="rgb(255, 0, 0)" />
  //       <stop offset="100%" stopColor="rgb(0, 255, 0)" />
  //     </linearGradient>
  //   </defs>
  // )
  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      title={`RGB${parenthesisString}`}
      placement="right"
    >
      <div id='tokenWrapper' style={tokenWrapperStyle}>
        <div
          className='token'
          style={tokenStyle}
        >
        </div>
        <svg id="scoreBorder" style={scoreBorderStyle} >
          <circle
            id="bar"
            fill="none"
            style={circleStyle}
          >
          </circle>
        </svg>
      </div >
    </Tooltip>
  )
}

export default MyToken