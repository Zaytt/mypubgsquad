import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SquadMemberStat extends Component {
  static propTypes = {
    stat: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    bold: PropTypes.bool
  };

  render() {
    let { stat, value } = this.props;
    let bold = this.props.bold ? 'font-weight-bold' : '';
    return (
      <React.Fragment>
        <div className="col-6 col-sm-3 mb-2">
          <h6>{stat}</h6>
        </div>
        <div className={`col-6 col-sm-3 ${bold} mb-2`}>
          <h6>{value}</h6>
        </div>
      </React.Fragment>
    );
  }
}

export default SquadMemberStat;
