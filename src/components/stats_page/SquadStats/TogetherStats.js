import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash.isempty';
import Separator from '../../common/Separator';
import Error from '../../common/Error';
import PlayerPicker from './PlayerPicker';
import SquadSearch from './SquadSearch';
import SquadStatsFilter from './SquadStatsFilter';
import SquadStatsSummary from './SquadStatsSummary';
import SquadMemberStats from './SquadMemberStats';
import SquadMemberSelector from './SquadMemberSelector';
import Spinner from '../../common/Spinner';

class TogetherStats extends Component {
  static propTypes = {
    stats: PropTypes.object.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired
  };

  renderSquadStats = () => {
    const { stats, mode, perspective } = this.props;
    const gameMode = mode + perspective;
    return _isEmpty(stats) ? null : (
      <React.Fragment>
        <SquadStatsFilter />
        <SquadStatsSummary />
        {stats[gameMode].gamesPlayed === 0 ? (
          ''
        ) : (
          <React.Fragment>
            <div className="row  d-flex justify-content-center text-light mt-5">
              <div className="col-lg-8 col-md-10 col-12 text-center">
                <SquadMemberSelector />
              </div>
            </div>
            <SquadMemberStats />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };
  render() {
    const { loading, error } = this.props;
    return (
      <div className="container light-grey rounded">
        <PlayerPicker />
        <SquadSearch />
        <Separator color="secondary" length={10} margin={4} />
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error
            error={error}
            message={`Oops! Something went wrong while fetching your squad's matches, please try again later`}
          />
        ) : (
          this.renderSquadStats()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.squad.loading,
  error: state.squad.error,
  stats: state.squad.stats,
  mode: state.squad.mode,
  perspective: state.squad.perspective
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TogetherStats);
