import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _round from 'lodash.round';
import Header from './SquadMemberCardHeader';
import Stat from './SquadMemberCardStat';
import Separator from '../../common/Separator';

class SquadMemberCard extends Component {
  static propTypes = {
    playerSeason: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired
  };

  secondsToMinutes = secs => {
    secs = _round(secs);
    const minutes = Math.floor(_round(secs) / 60);
    const seconds = _round(secs) - minutes * 60;
    return `${minutes}:${seconds}`;
  };

  checkZeroGames = (stat, rounds) => {
    return rounds === 0 ? '0' : stat;
  };

  render() {
    const gameMode = this.props.mode + this.props.perspective;
    const { name } = this.props.playerSeason.relationships.player.attributes;
    const {
      rankPoints,
      kills,
      roundMostKills,
      roundsPlayed,
      damageDealt,
      timeSurvived,
      longestKill,
      headshotKills,
      wins,
      top10s
    } = this.props.playerSeason.attributes.gameModeStats[gameMode];

    return (
      <div className="card h-100 w-100 bg-dark text-light border-secondary stat-card">
        <div className="card-body">
          <Header
            playername={name}
            rank={rankPoints}
            gamesPlayed={roundsPlayed}
            wins={wins}
            top10s={top10s}
            kills={kills}
          />
          <Separator color="secondary" margin="0" length="12" />
          {roundsPlayed === 0 ? (
            <h3 className="text-center h-50 d-flex justify-content-center align-items-center">
              No rounds played
            </h3>
          ) : (
            <React.Fragment>
              <div className="row">
                <Stat
                  stat="KDR"
                  value={this.checkZeroGames(_round(kills / roundsPlayed, 2), roundsPlayed)}
                  bold
                />
                <Stat
                  stat="Avg. Damage"
                  value={this.checkZeroGames(_round(damageDealt / roundsPlayed, 2), roundsPlayed)}
                  bold
                />
              </div>
              <div className="row">
                <Stat stat="Most Kills" value={roundMostKills} />
                <Stat
                  stat="Avg. Time Survived"
                  value={this.checkZeroGames(
                    this.secondsToMinutes(timeSurvived / roundsPlayed),
                    roundsPlayed
                  )}
                />
              </div>
              <div className="row">
                <Stat
                  stat="Longest Kill"
                  value={`${this.checkZeroGames(_round(longestKill), roundsPlayed)} m`}
                />
                <Stat
                  stat="Headshot"
                  value={`${this.checkZeroGames(
                    _round((headshotKills / kills) * 100, 1),
                    roundsPlayed
                  )} %`}
                />
              </div>
              <div className="row">
                <Stat
                  stat="Win %"
                  value={`${this.checkZeroGames(
                    _round((wins / roundsPlayed) * 100, 1),
                    roundsPlayed
                  )} %`}
                />
                <Stat
                  stat="Top 10 %"
                  value={`${this.checkZeroGames(
                    _round((top10s / roundsPlayed) * 100, 1),
                    roundsPlayed
                  )} %`}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.playerSeasons.mode,
  perspective: state.playerSeasons.perspective
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadMemberCard);
