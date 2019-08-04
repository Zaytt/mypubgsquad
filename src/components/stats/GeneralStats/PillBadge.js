import React from 'react';
import PropTypes from 'prop-types';

function PillBadge(props) {
  let { stat, singular, plural, color } = props;
  return (
    <div className="row">
      <div className="col-12 w-100">
        <span className={`badge badge-pill my-1 badge-${color} w-100`}>
          {stat === 1 ? `${stat} ${singular} ` : `${stat} ${plural} `}
        </span>
      </div>
    </div>
  );
}

PillBadge.propTypes = {
  stat: PropTypes.number.isRequired,
  singular: PropTypes.string.isRequired,
  plural: PropTypes.string.isRequired
};

export default PillBadge;
