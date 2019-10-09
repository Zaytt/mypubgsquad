import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectorPill from '../GeneralStats/SelectorPill';
import { setSquadGameMode, setSquadPerspective } from '../../../redux/actions/togetherStatsActions';

class StatsFilter extends Component {
  static propTypes = {
    squadFetched: PropTypes.array.isRequired,
    setSquadGameMode: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
    perspective: PropTypes.string.isRequired
  };

  changeGameMode = mode => this.props.setSquadGameMode(mode);

  changePerspective = perspective => this.props.setSquadPerspective(perspective);

  renderDuoButton = () => {
    const { mode } = this.props;
    if (this.props.squadFetched.length === 2) {
      return (
        <SelectorPill
          selected={mode === 'duo' ? true : false}
          text="Duo"
          rounded={['left']}
          activeColor="warning"
          inactiveColor="secondary"
          onClick={() => this.changeGameMode('duo')}
          disabled={this.props.squadFetched.length > 2}
        />
      );
    } else {
      return <SelectorPill text="Duo" rounded={['left']} disabled />;
    }
  };

  render() {
    const { mode, perspective } = this.props;
    return (
      <div className="row mb-5 d-flex justify-content-center">
        <div className="col-lg-8 col-md-10 col-12">
          <div className="row d-flex justify-content-center">
            <div className="col-6">
              <ul className="nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded">
                {this.renderDuoButton()}
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

            <div className="col-6">
              <ul className="nav nav-pills mt-2 nav-fill nav-justified border border-dark rounded">
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
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squadFetched: state.squad.membersFetched,
  mode: state.squad.mode,
  perspective: state.squad.perspective
});

const mapDispatchToProps = {
  setSquadGameMode,
  setSquadPerspective
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatsFilter);
