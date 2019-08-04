import React, { Component } from 'react';
import { connect } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { Spring } from 'react-spring/renderprops';

import sanitizeString from '../../validation/sanitizeString';
import { getPlayerSeasons, getCurrentSeason } from '../../redux/actions/playerSeasonsActions';

import Separator from '../common/Separator';
import Spinner from '../common/Spinner';
import Error from '../common/Error';
import IndividualStats from './GeneralStats/IndividualStats';
import TogetherStats from './SquadStats/TogetherStats';
import AloneTogetherPicker from './AloneTogetherPicker';

export class StatsDashboard extends Component {
  state = {
    alone: true,
    squad: ''
  };

  componentDidMount() {
    this.fetchPlayerSeasons();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newSquadMates = sanitizeString(nextProps.match.params.team)
      .split(',')
      .filter(el => {
        return el != null;
      })
      .join(',');
    if (newSquadMates !== prevState.squad) {
      return { squad: newSquadMates };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.squad !== this.state.squad) this.fetchPlayerSeasons();
  }

  fetchPlayerSeasons = () => {
    const squadMates = sanitizeString(this.props.match.params.team)
      .split(',')
      .filter(el => {
        return el != null;
      })
      .join(',');

    this.setState({ squad: squadMates });
    this.props.getPlayerSeasons(squadMates, this.props.season);
  };

  setAlone = status => {
    this.setState({ alone: status });
  };

  renderStats = stats => {
    let index = this.state.alone ? 0 : 1;
    return (
      <Spring from={{ opacity: 0, marginTop: 500 }} to={{ opacity: 1, marginTop: 0 }}>
        {props => (
          <div style={props} className="row d-flex justify-content-center">
            <SwipeableViews index={index}>
              <IndividualStats />
              <TogetherStats />
            </SwipeableViews>
          </div>
        )}
      </Spring>
    );
  };

  render() {
    const { squadStats, loading, error } = this.props;
    const { alone } = this.state;

    return (
      <div className="squadStats">
        <div className="container">
          <div className="row">
            <div className="col-md-12 my-4">
              <h1 className="display-3 text-center pubg-font text-black mb-4">
                Your Squad this season
              </h1>
              {loading ? (
                <Spinner />
              ) : error ? (
                <Error
                  error={error}
                  message={`Oops! Something went wrong while fetching your squad's data, please try again later`}
                  retry={this.fetchPlayerSeasons}
                />
              ) : (
                <React.Fragment>
                  <AloneTogetherPicker setAlone={this.setAlone} alone={alone} />
                  <Separator color="dark" length="10" marginTop="1" marginBottom="3" />
                  {this.renderStats(squadStats)}
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squadStats: state.playerSeasons.stats,
  loading: state.playerSeasons.loading,
  season: state.playerSeasons.season,
  error: state.playerSeasons.error
});

const mapDispatchToProps = {
  getPlayerSeasons,
  getCurrentSeason
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsDashboard);
