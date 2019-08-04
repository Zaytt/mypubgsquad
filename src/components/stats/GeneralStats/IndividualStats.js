import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SquadMemberCard from './SquadMemberCard';
import GameModeSelector from './GameModeSelector';
import { connect } from 'react-redux';

class IndividualStats extends Component {
  static propTypes = {
    stats: PropTypes.array.isRequired
  };

  renderSquadMembers = stats => {
    return stats.map(playerSeason => (
      <div
        key={playerSeason.relationships.player.attributes.name}
        className="col-lg-6 col-12 mb-3 "
      >
        {<SquadMemberCard playerSeason={playerSeason} />}
      </div>
    ));
  };

  render() {
    const { stats } = this.props;
    return (
      <div className="col-12">
        <GameModeSelector />
        <div className="row ">{this.renderSquadMembers(stats)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stats: state.playerSeasons.stats
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualStats);
