import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash.isempty';
import _isEqual from 'lodash.isequal';
import _sortBy from 'lodash.sortby';
import { getPlayerSeasons } from '../../../redux/actions/playerSeasonsActions';
import {
  getSquadStats,
  setSquadMembersFetched,
  selectPlayer
} from '../../../redux/actions/togetherStatsActions';
class SquadSearch extends Component {
  static propTypes = {
    membersPicked: PropTypes.array.isRequired,
    membersFetched: PropTypes.array.isRequired,
    stats: PropTypes.object.isRequired,
    season: PropTypes.string.isRequired
  };

  // Call the redux action to fetch the squad stats
  searchSquadStats = () => {
    this.props.membersPicked.sort();
    this.props.setSquadMembersFetched(this.props.membersPicked);
    this.props.getSquadStats(this.props.membersPicked.join(','));
  };

  // Call the redux action to refresh the squad stats
  refreshSquadStats = () => {
    const membersFetchedArray = this.props.membersFetched.join(',');
    this.props.getPlayerSeasons(membersFetchedArray, this.props.season, true);
    this.props.getSquadStats(membersFetchedArray);
  };

  /**
   Renders search button. If the players have already been searched or have picked less than 2, it becomes disabled
   */
  renderSearchButton = () => {
    let searchButton = '';
    if (
      this.props.membersPicked &&
      this.props.membersPicked.length >= 2 &&
      (_isEmpty(this.props.stats) ||
        !_isEqual(_sortBy(this.props.membersPicked), _sortBy(this.props.membersFetched)))
    ) {
      searchButton = (
        <li className="nav-item bg-warning rounded-left rounded-right ">
          <button
            className="btn btn-warning border border-dark rounded w-100"
            onClick={this.searchSquadStats}
          >
            <i className="fas fa-search" /> Search
          </button>
        </li>
      );
    } else {
      searchButton = (
        <li className="nav-item  bg-secondary text-light rounded-left rounded-right disabled">
          <button disabled className="btn btn-secondary disabled w-100 ">
            <i className="fas fa-search" /> Search
          </button>
        </li>
      );
    }

    return searchButton;
  };

  /**
   * Renders refresh button. Activates once stats have been loaded and as long as the same players are being picked
   */
  renderReloadButton = () => {
    let reloadButton = '';
    if (
      !_isEmpty(this.props.stats) &&
      _isEqual(_sortBy(this.props.membersPicked), _sortBy(this.props.membersFetched))
    ) {
      reloadButton = (
        <li className="nav-item bg-warning text-light rounded-right">
          <button
            className="btn btn-warning w-100 border border-dark"
            onClick={this.refreshSquadStats}
          >
            <i className="fas fa-redo-alt" /> Refresh
          </button>
        </li>
      );
    } else {
      reloadButton = (
        <li className="nav-item bg-secondary text-light rounded-right disabled">
          <button disabled className="btn btn-secondary disabled w-100 ">
            <i className="fas fa-redo-alt" /> Refresh
          </button>
        </li>
      );
    }

    return reloadButton;
  };

  render() {
    return (
      <div className="row d-flex justify-content-center mb-2 mt-5">
        <div className="col-lg-3 col-md-6 col-11">
          <ul className="nav nav-pills mt-2 nav-fill nav-justified">
            {this.renderSearchButton()}
            {/* {this.renderReloadButton()} */}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  membersPicked: state.squad.membersPicked,
  membersFetched: state.squad.membersFetched,
  stats: state.squad.stats,
  season: state.playerSeasons.season
});

const mapDispatchToProps = {
  getSquadStats,
  setSquadMembersFetched,
  selectPlayer,
  getPlayerSeasons
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadSearch);
