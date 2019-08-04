import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _round from 'lodash.round';
import { getRankTitleLevel, getRankTitle } from '../../../util/Util';
import rankIcons from '../../../assets/images/images.js';

import PillBadge from './PillBadge';

class SquadMemberItemHeader extends Component {
  static propTypes = {
    playername: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    wins: PropTypes.number.isRequired,
    top10s: PropTypes.number.isRequired
  };

  render() {
    const { playername, rank, gamesPlayed, wins, top10s } = this.props;
    const rankIconIndex = rankIcons.findIndex(icon => icon.id === getRankTitle(rank));
    return (
      <div className="row">
        <div className="col-5  d-flex align-items-center mx-0">
          <h2 className="card-title text-truncate text-warning">{playername}</h2>
        </div>
        <div className="col-7  mx-0">
          <div className="row">
            <div className="d-flex col-xl-2 col-lg-2 col-sm-3 col-4 p-0 justify-content-end">
              <img
                src={rankIcons[rankIconIndex].src}
                alt="Rank Icon"
                style={{ width: '69px', height: '80px' }}
              />
            </div>
            <div className="d-none d-sm-flex col-xl-5 col-lg-5 col-sm-4 col-4 align-items-end justify-content-center text-center">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 p-0 d-flex align-items-end  justify-content-center">
                      <h4>{_round(rank)}</h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12  p-0 d-flex align-items-end  justify-content-center">
                      <p className="text-light" style={{ fontSize: '14px' }}>
                        {getRankTitleLevel(rank)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-sm-5 col-8 px-1">
              <PillBadge stat={gamesPlayed} singular="Game" plural="Games" color="success" />
              <PillBadge stat={top10s} singular="Top 10" plural="Top 10s" color="primary" />
              <PillBadge stat={wins} singular="Win" plural="Wins" color="warning" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SquadMemberItemHeader;
