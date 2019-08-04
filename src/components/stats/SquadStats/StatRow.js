import React from 'react';
import _round from 'lodash.round';

function StatRow(props) {
  let { playerStat, squadStat, label, type, unit, nokills } = props;
  if (isNaN(playerStat)) playerStat = 0;

  let info = '';

  if (type === 'total') {
    // Show the stat description as the % of the Squad's Total
    let stat = _round((playerStat / squadStat) * 100, 0);
    info = (
      <React.Fragment>
        <span className="text-warning"> {stat}%</span> of the Squad's total {label}
      </React.Fragment>
    );
  } else {
    let diff = playerStat - squadStat;
    let color = '';
    let direction = '';
    if (type === 'avg') {
      // Show the stat description as the % above or below the Squad's Average
      let percentage = Math.abs(_round((diff / squadStat) * 100, 0));
      if (isNaN(percentage)) percentage = 0;
      if (diff > 0) {
        direction = 'above';
        color = 'text-success';
      } else {
        direction = 'below';
        color = 'text-danger';
      }
      info = (
        <React.Fragment>
          <span className={color}>{percentage}%</span> {direction} the Squad's average
        </React.Fragment>
      );
    } else if (type === 'distance') {
      //Means player hasn't made a Kill
      if (nokills) {
        info = <React.Fragment>No Kills</React.Fragment>;
      }
      // Show the stat description as the difference in meters
      else if (diff === 0) {
        info = <React.Fragment>{label} in the Squad</React.Fragment>;
      } else {
        info = (
          <React.Fragment>
            <span className="text-danger">{Math.abs(diff)}</span> meters shorter than the {label}
          </React.Fragment>
        );
      }
    }
  }

  return (
    <div className="row mb-3 d-flex justify-content-center">
      <div className="col-md-4 col-sm-3 col-4">
        <h6 className="font-weight-bold">{label}</h6>
      </div>
      <div className="col-md-2 col-sm-2 col-3">
        <h6>
          {playerStat} {unit}
        </h6>
      </div>
      <div className="col-md-6 col-sm-7 col-5">
        <h6>{info}</h6>
      </div>
    </div>
  );
}

export default StatRow;
