import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash.isempty';

class SquadStatsSummary extends Component {
  static propTypes = {
    squad: PropTypes.array.isRequired,
    stats: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired
  };

  formatNames = () => {
    let text = '';
    const { squad } = this.props;
    if (!_isEmpty(squad)) {
      text = squad.map((playerName, index) => {
        if (index === squad.length - 1) {
          return '& ' + playerName;
        } else if (index === squad.length - 2) {
          return playerName + ' ';
        } else {
          return playerName + ', ';
        }
      });
    }

    return text;
  };

  render() {
    const { stats, mode, perspective } = this.props;
    const gameMode = mode + perspective;
    let matchesInfo,
      topTenInfo,
      winInfo,
      modeInfo = '';

    switch (gameMode) {
      case 'duo':
        modeInfo = 'Duo TPP';
        break;
      case 'duoFPP':
        modeInfo = 'Duo FPP';
        break;
      case 'squad':
        modeInfo = 'Squad TPP';
        break;
      case 'squadFPP':
        modeInfo = 'Squad FPP';
        break;
      default:
        modeInfo = '';
    }

    // A little formating to handle plurals
    if (!_isEmpty(stats)) {
      matchesInfo =
        stats[gameMode].gamesPlayed === 1
          ? `Played ${stats[gameMode].gamesPlayed} ${modeInfo} Match Together`
          : `Played ${stats[gameMode].gamesPlayed} ${modeInfo} Matches Together`;

      topTenInfo =
        stats[gameMode].top10s === 1
          ? `Reached Top Ten ${stats[gameMode].top10s} Time`
          : `Reached Top Ten ${stats[gameMode].top10s} Times`;

      winInfo =
        stats[gameMode].wins === 1
          ? `Earned ${stats[gameMode].wins} Chicken Dinner`
          : `Earned ${stats[gameMode].wins} Chicken Dinners`;
    }

    return (
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <h4 className="text-dark text-center">In the past 14 days,</h4>
          <h3 className="text-dark text-center mb-4">{this.formatNames()} have: </h3>
          <ul className="list-group  ">
            <li className="list-group-item bg-dark text-light border border-dark">
              <h4 className="text-center">
                <i className="fas fa-users" /> <span>{matchesInfo}</span>
              </h4>
            </li>
            <li className="list-group-item bg-dark text-light border border-dark">
              <h4 className="text-center">
                <i className="fas fa-medal" /> {topTenInfo}
              </h4>
            </li>
            <li className="list-group-item bg-warning border border-dark">
              <h4 className="text-center">
                <i className="fas fa-trophy" /> {winInfo}
              </h4>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.squad.stats,
  squad: state.squad.membersFetched,
  mode: state.squad.mode,
  perspective: state.squad.perspective
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadStatsSummary);
