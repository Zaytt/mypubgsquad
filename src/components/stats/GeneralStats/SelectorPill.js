import React from 'react';

function SelectorPill(props) {
  const { selected, activeColor, inactiveColor, border } = props;
  let rounded = '';
  if (props.rounded)
    props.rounded.forEach(direction => {
      rounded = rounded + `rounded-${direction} `;
    });
  if (selected === true) {
    return (
      <li
        className={`nav-item bg-${activeColor} ${rounded} ${border}`}
        style={{ cursor: 'pointer' }}
      >
        <button className={`btn btn-${activeColor} w-100`} onClick={props.onClick}>
          {props.text}
        </button>
      </li>
    );
  } else if (props.disabled === true) {
    return (
      <li className={`nav-item bg-secondary ${rounded} ${border} disabled`}>
        <button className="btn btn-secondary disabled w-100" onClick={props.onClick} disabled>
          {props.text}
        </button>
      </li>
    );
  } else {
    return (
      <li
        className={`nav-item bg-${inactiveColor} ${rounded} ${border}`}
        style={{ cursor: 'pointer' }}
      >
        <button className={`btn btn-${inactiveColor}  w-100`} onClick={props.onClick}>
          {props.text}
        </button>
      </li>
    );
  }
}

export default SelectorPill;
