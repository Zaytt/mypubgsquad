import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash.isempty';
import _round from 'lodash.round';
import Separator from '../../common/Separator';
import SquadMemberStatsHeader from './SquadMemberStatsHeader';
import StatRow from './StatRow';
import { selectPlayer } from '../../../redux/actions/togetherStatsActions';
import { SquadMemberRandomFact } from './SquadMemberRandomFact';

export class SquadMemberStats extends Component {
  static propTypes = {
    player: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired,
    squad: PropTypes.array.isRequired
  };

  render() {
    let { player, stats, mode, perspective, squad } = this.props;
    const gameMode = mode + perspective;

    if (_isEmpty(stats)) {
      return '';
    }

    if (!squad.includes(player)) {
      this.props.selectPlayer(squad[0]);
      player = squad[0];
    }

    const badges = stats[gameMode].stats[player].badges;
    const playerStats = stats[gameMode].stats[player];
    const squadStats = stats[gameMode].stats.teamTotal;
    const gamesPlayed = stats[gameMode].gamesPlayed;

    return (
      <div className="row  d-flex justify-content-center text-light ">
        <div className="col-lg-8 col-md-10 col-12 text-center">
          <div className="bg-dark text-light border-secondary stat-card mb-5 rounded-bottom">
            <div className="card-body">
              <SquadMemberStatsHeader player={player} badges={badges} />
              <Separator color="secondary" length={10} margin={4} />
              <div className="row">
                <div className="col-12">
                  <StatRow
                    label="Kills"
                    playerStat={playerStats.kills}
                    squadStat={squadStats.kills}
                    type="total"
                  />
                  <StatRow
                    label="K/D"
                    playerStat={_round(playerStats.kills / gamesPlayed, 2)}
                    squadStat={_round(squadStats.kills / (gamesPlayed * squad.length), 2)}
                    type="avg"
                  />
                  <StatRow
                    label="Total Damage"
                    playerStat={_round(playerStats.damageDealt, 0)}
                    squadStat={_round(squadStats.damageDealt, 0)}
                    type="total"
                  />
                  <StatRow
                    label="Avg. Damage"
                    playerStat={_round(playerStats.damageDealt / gamesPlayed, 0)}
                    squadStat={_round(squadStats.damageDealt / (gamesPlayed * squad.length), 0)}
                    type="avg"
                  />

                  <StatRow
                    label="% Headshot Kills"
                    playerStat={_round((playerStats.headshotKills / playerStats.kills) * 100, 1)}
                    squadStat={_round((squadStats.headshotKills / squadStats.kills) * 100, 1)}
                    type="avg"
                    unit="%"
                  />
                  <StatRow
                    label="Longest Kill"
                    playerStat={_round(playerStats.longestKill, 0)}
                    squadStat={_round(squadStats.longestKill, 0)}
                    type="distance"
                    unit="m"
                    nokills={playerStats.kills === 0}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <Separator color="secondary" length={10} margin={4} />
                  <SquadMemberRandomFact player={player} stats={playerStats} rounds={gamesPlayed} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  player: state.squad.selectedPlayer,
  stats: state.squad.stats,
  mode: state.squad.mode,
  perspective: state.squad.perspective,
  squad: state.squad.membersFetched
});

const mapDispatchToProps = {
  selectPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadMemberStats);
