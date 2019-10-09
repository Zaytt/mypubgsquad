import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _round from 'lodash.round';

export class SquadMemberRandomFact extends Component {
  static propTypes = {
    player: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    rounds: PropTypes.number.isRequired
  };

  getFactText = stat => {
    switch (stat) {
      case 'timeSurvived':
        return {
          actionMost: 'has <span class="text-info">survived</span> for',
          actionAvg: 'has <span class="text-info">survived</span> for an average of',
          unitMost: ', the longest of the whole squad.',
          unitAvg: ' each round.'
        };
      case 'alive':
        return {
          actionAvg:
            'has survived <span class="text-info"> all the way</span> to the end to enjoy his <span class="text-warning">chicken dinner</span>',
          unitAvg: 'times'
        };
      case 'zoneDeaths':
        return {
          actionMost: 'has been killed by the <span class="text-info">zone</span>',
          unitMost: 'times, more than any other squad member.'
        };
      case 'teamKills':
        return {
          actionMost: 'has commited',
          unitMost:
            '<span class="text-danger">team kills</span>, more than any other squad member. Shame on him.'
        };
      case 'headshotKills':
        return {
          actionMost: 'has shot ',
          unitMost: 'players in the <span class="text-info">face</span>!. Glorious!'
        };
      case 'roadKills':
        return {
          actionMost: 'has <span class="text-success">ran over</span>',
          unitMost: 'players.<br>Awesome!'
        };
      case 'revives':
        return {
          actionMost: 'has <span class="text-info">revived</span> his teammates',
          unitMost: 'times.<br>Hero!'
        };
      case 'swimDistance':
        return {
          actionMost: 'has <span class="text-info">swum</span> over',
          unitMost:
            'meters.<br>Pretty impressive considering he was carrying over 50kg of guns, explosives and energy drinks.'
        };
      case 'walkDistance':
        return {
          actionMost: 'has <span class="text-info">walked</span> over',
          actionAvg: 'walks around',
          unitMost: 'kilometers.',
          unitAvg: '<span class="text-info">kilometers</span> per round.'
        };
      case 'vehicleDestroys':
        return {
          actionMost: 'has <span class="text-success">destroyed</span>',
          unitMost: 'vehicles.<br>Nice!'
        };
      case 'weaponsAcquired':
        return {
          actionMost: 'has picked up',
          actionAvg: 'has picked up an average of',
          unitMost: `<span class="text-success">weapons</span>.`,
          unitAvg:
            '<span class="text-success">weapons</span> per match. Yep, running out of random stats here.'
        };
      default:
        return null;
    }
  };

  calculateRandomFact = () => {
    const factsAvailable = [
      'timeSurvived',
      'survived',
      'zoneDeaths',
      'teamKills',
      'roadKills',
      'revives',
      'swimDistance',
      'walkDistance',
      'vehicleDestroys',
      'weaponsAcquired'
    ];
    const facts = this.props.stats.badges.filter(badge => factsAvailable.includes(badge.stat));

    const fact = facts.length > 0 ? facts[Math.floor(Math.random() * (facts.length - 1))] : false;
    if (!fact) return this.calculateRandomAvgFact();
    else {
      let factText = this.getFactText(fact.stat);
      let factValue =
        fact.stat === 'walkDistance'
          ? _round(fact.value / 1000, 1)
          : fact.stat === 'timeSurvived'
          ? this.convertSeconds(_round(fact.value, 0))
          : fact.value % 1 === 0
          ? fact.value
          : _round(fact.value, 1);

      return `${factText.actionMost} ${factValue} ${factText.unitMost}`;
    }
  };

  calculateRandomAvgFact = () => {
    const factsAvailable = ['alive', 'timeSurvived', 'walkDistance', 'weaponsAcquired'];
    const { stats, rounds } = this.props;
    const facts = factsAvailable.filter(fact => this.props.stats[fact] > 0);
    let fact = facts[Math.floor(Math.random() * (facts.length - 1))];
    let factValue =
      fact === 'walkDistance'
        ? _round(stats[fact] / (1000 * rounds), 1)
        : fact === 'timeSurvived'
        ? this.convertSeconds(_round(stats[fact] / rounds, 0))
        : fact === 'alive'
        ? stats[fact]
        : _round(stats[fact] / rounds, 0);
    let factText = this.getFactText(fact);
    return `${factText.actionAvg} ${factValue} ${factText.unitAvg}`;
  };

  convertSeconds = sec => {
    const hrs = Math.floor(sec / 3600);
    const min = Math.floor((sec - hrs * 3600) / 60);
    let seconds = sec - hrs * 3600 - min * 60;
    seconds = Math.round(seconds * 100) / 100;

    let result = hrs === 0 ? '' : hrs === 1 ? `${hrs} hour` : `${hrs} hours`;
    result += (hrs > 0 ? ', ' : '') + (min === 1 ? `${min} minute` : `${min} minutes`);
    result +=
      (hrs === 0 && min === 0 ? ' ' : ' and ') +
      (seconds === 1 ? `${seconds} second` : `${seconds} seconds`);
    return result;
  };

  getRandomFact = () => {
    let chance = Math.floor(Math.random() * 100);
    if (chance < 60) return this.calculateRandomFact();
    else return this.calculateRandomAvgFact();
  };

  render() {
    const randomFact = this.getRandomFact();
    return (
      <div className="row d-flex justify-content-center">
        <div className="col-10">
          <h5 className="mb-3">Random fact: </h5>
          <p className="lead">
            {' '}
            <span className="text-warning">{`${this.props.player} `}</span>
            <span dangerouslySetInnerHTML={{ __html: randomFact }} />
          </p>
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
)(SquadMemberRandomFact);
