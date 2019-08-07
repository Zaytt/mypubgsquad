import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class SquadMemberStatsHeader extends Component {
  static propTypes = {
    player: PropTypes.string.isRequired,
    badges: PropTypes.array.isRequired
  };

  state = {
    badgeColors: {
      assists: 'badge-primary',
      damageDealt: 'badge-dark border border-warning',
      headshotKills: 'badge-warning',
      kills: 'badge-danger',
      longestKill: 'badge-success',
      teamKills: 'badge-dark border border-danger text-light',
      timeSurvived: 'badge-info',
      vehicleDestroys: 'badge-dark border border-success'
    }
  };

  renderBadges = () => {
    const badges = this.props.badges.filter(badge =>
      Object.keys(this.state.badgeColors).includes(badge.stat)
    );
    return badges.map(badge => (
      <span
        data-tip
        data-for={badge.stat}
        key={badge.stat}
        className={`badge ${this.state.badgeColors[badge.stat]} active my-badge m-1`}
      >
        {badge.description}
      </span>
    ));
  };

  render() {
    const { player } = this.props;

    return (
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-sm-6 justify-content-sm-center justify-content-start">
          <h1 className="card-title text-warning ">{player}</h1>
        </div>
        <div className="col-12 col-sm-6 d-flex flex-wrap justify-content-center">
          {this.renderBadges()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadMemberStatsHeader);
