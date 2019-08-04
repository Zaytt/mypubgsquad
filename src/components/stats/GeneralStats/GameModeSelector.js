import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectorPill from './SelectorPill';
import {
  setGameMode,
  setPerspective,
  getPlayerSeasons
} from '../../../redux/actions/playerSeasonsActions';

class GameModeSelector extends Component {
  static propTypes = {
    setGameMode: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired
  };

  changeGameMode = mode => this.props.setGameMode(mode);

  changePerspective = perspective => this.props.setPerspective(perspective);

  renew = async () => {
    let { squad, season } = this.props;

    let route = `/api/stats?squad=${squad.join(',')}&seasonid=${season}`;
    await axios.get('/api/stats/cache/clear/', {
      params: {
        target: route
      }
    });

    this.props.getPlayersStats(squad.join(','), season);
  };

  render() {
    const { mode, perspective } = this.props;
    return (
      <div className="row mb-3 d-flex ">
        <div className="col-md-6 mb-2">
          <div className="row justify-content-md-end">
            <div className="col-lg-6 d-flex  justify-content-center">
              <ul className="nav nav-pills nav-fill nav-justified w-100 border border-dark rounded">
                <SelectorPill
                  selected={mode === 'solo' ? true : false}
                  rounded={['left']}
                  text="Solo"
                  activeColor="warning"
                  inactiveColor="secondary"
                  onClick={() => this.changeGameMode('solo')}
                />
                <SelectorPill
                  selected={mode === 'duo' ? true : false}
                  text="Duo"
                  activeColor="warning"
                  inactiveColor="secondary"
                  onClick={() => this.changeGameMode('duo')}
                />
                <SelectorPill
                  selected={mode === 'squad' ? true : false}
                  text="Squad"
                  rounded={['right']}
                  activeColor="warning"
                  inactiveColor="secondary"
                  onClick={() => this.changeGameMode('squad')}
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <div className="row justify-content-start">
            <div className="col-lg-6 mb-2">
              <ul className="nav nav-pills nav-fill nav-justified w-100 d-flex border border-dark rounded">
                <SelectorPill
                  selected={perspective === 'FPP' ? true : false}
                  text="FPP"
                  rounded={['left']}
                  activeColor="warning"
                  inactiveColor="secondary"
                  onClick={() => this.changePerspective('FPP')}
                />
                <SelectorPill
                  selected={perspective === '' ? true : false}
                  text="TPP"
                  rounded={['right']}
                  activeColor="warning"
                  inactiveColor="secondary"
                  onClick={() => this.changePerspective('')}
                />
              </ul>
            </div>
            {/* <div className="col-lg-6 d-flex justify-content-end mb-2">
              <button onClick={this.renew} className="btn btn-dark text-light w-100" type="button">
                <i className="fas fa-redo-alt" />
                {' Renew'}
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mode: state.playerSeasons.mode,
  perspective: state.playerSeasons.perspective,
  season: state.playerSeasons.season,
  squad: state.playerSeasons.players
});

const mapDispatchToProps = { setGameMode, setPerspective, getPlayerSeasons };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameModeSelector);
