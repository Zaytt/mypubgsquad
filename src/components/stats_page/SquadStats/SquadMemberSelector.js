import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _isEmpty from 'lodash.isempty';
import SelectorPill from '../GeneralStats/SelectorPill';
import { selectPlayer } from '../../../redux/actions/togetherStatsActions';

class SquadMemberSelector extends Component {
  static propTypes = {
    squad: PropTypes.array.isRequired,
    selectedPlayer: PropTypes.string.isRequired,
    selectPlayer: PropTypes.func.isRequired
  };

  onButtonClick = player => {
    this.props.setPlayer(player);
  };

  renderPlayerButtons = () => {
    const { squad, selectedPlayer, selectPlayer } = this.props;

    if (!_isEmpty(squad)) {
      if (selectedPlayer === '') this.props.selectPlayer(squad[0]);

      return squad.map((player, index) => {
        const selected = player === selectedPlayer;

        return (
          <SelectorPill
            key={player}
            text={player}
            rounded={['top']}
            activeColor="dark"
            inactiveColor="secondary"
            border={
              index !== 0 && index !== squad.length - 1
                ? 'border-dark border-top border-bottom'
                : 'border border-dark'
            }
            onClick={() => selectPlayer(player)}
            selected={selected}
          />
        );
      });
    }
  };

  render() {
    return (
      <div className="row d-flex justify-content-center text-muted mt-3">
        <div className="col-12">
          <ul className="nav nav-pills mt-2 nav-fill nav-justified">
            {this.renderPlayerButtons()}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  squad: state.squad.membersFetched,
  selectedPlayer: state.squad.selectedPlayer
});

const mapDispatchToProps = {
  selectPlayer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SquadMemberSelector);
