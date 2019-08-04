import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _difference from 'lodash.difference';
import _without from 'lodash.without';
import _concat from 'lodash.concat';
import _omit from 'lodash.omit';
import { connect } from 'react-redux';
import {
  setSquadMembers,
  setSquadMembersColors
} from '../../../redux/actions/togetherStatsActions';

class PlayerPicker extends Component {
  static propTypes = {
    players: PropTypes.array.isRequired
  };

  state = {
    inactiveColor: 'btn-secondary'
  };

  // Returns the first unused color
  getColor() {
    const colors = ['primary', 'danger', 'success', 'info'];
    const usedColors = Object.values(this.props.membersColors);
    let diff = _difference(colors, usedColors);
    return diff.length >= 1 ? diff[0] : '';
  }

  // Turns on and off a button color and adds/removes a player from the squad to search
  onButtonClick = (ref, playerName) => {
    let button = this.refs[ref];
    if (button.classList.contains('selected')) {
      this.deactivateButton(button, playerName);
      // Remove player from the squad in the store
      this.props.setSquadMembers(_without(this.props.membersPicked, button.value));
    } else {
      if (Object.keys(this.props.membersColors).length >= 4) {
        return;
      } else {
        this.activateButton(button, playerName);
        // Add player to the squad in the store
        this.props.setSquadMembers(_concat(this.props.membersPicked, button.value));
      }
    }
  };

  // Removes the inactive background class and adds the available color class to a button
  activateButton = (button, playerName) => {
    let color = this.getColor();
    this.addColor(color, playerName);
    button.classList.remove(this.state.inactiveColor);
    button.classList.add(`btn-${color}`, 'selected', 'border', 'border-dark');
  };

  // Removes the active background class and adds the inactive color class to a button
  deactivateButton = (button, playerName) => {
    let colorClass = button.classList.contains('btn-primary')
      ? 'btn-primary'
      : button.classList.contains('btn-danger')
      ? 'btn-danger'
      : button.classList.contains('btn-success')
      ? 'btn-success'
      : button.classList.contains('btn-info')
      ? 'btn-info'
      : '';
    this.removeColor(playerName);
    button.classList.remove(colorClass, 'selected', 'border', 'border-dark');
    button.classList.add(this.state.inactiveColor);
  };

  // Set the state of this color as true, which means it is in use
  addColor(color, playerName) {
    this.props.setSquadMembersColors({ ...this.props.membersColors, ...{ [playerName]: color } });
  }

  // Set the state of this color as false, which means it is available
  removeColor(playerName) {
    this.props.setSquadMembersColors(_omit(this.props.membersColors, playerName));
  }

  // Renders the buttons for the players
  renderButtons = players => {
    if (players)
      return players.map((playerName, index) => {
        let button = this.refs[`button${index}`];
        let disabled = button
          ? !button.classList.contains('selected') &&
            Object.keys(this.props.membersColors).length === 4
            ? 'disabled'
            : null
          : '';

        let color = this.props.membersColors.hasOwnProperty(playerName)
          ? `btn-${this.props.membersColors[playerName]} border border-dark selected`
          : 'btn-secondary';
        return (
          <button
            type="button"
            key={index}
            value={playerName}
            ref={`button${index}`}
            className={`btn btn-sm m-1 ${color} ${disabled}`}
            onClick={disabled ? null : () => this.onButtonClick(`button${index}`, playerName)}
          >
            {playerName}
          </button>
        );
      });
    else return '';
  };

  render() {
    const { players } = this.props;
    return (
      <React.Fragment>
        <div className="row mb-4 d-flex justify-content-center">
          <div className="col-md-10 col-12 text-center ">
            <h5 className="text-dark">
              Pick up to 4 squad members to look for their stats together:
            </h5>
            <br />
            <br />
            {this.renderButtons(players)}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  players: state.playerSeasons.players,
  membersPicked: state.squad.membersPicked,
  membersColors: state.squad.membersColors
});

const mapDispatchToProps = { setSquadMembers, setSquadMembersColors };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPicker);
