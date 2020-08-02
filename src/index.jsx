import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import Functional from './components/Functional';

import image1 from './assets/images/avatar.jpg';
import image2 from './assets/images/avatar2.png';

import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }

  toggleActive = () => {
    this.setState((prevState) => ({ active: !prevState.active }));
  };

  render() {
    const { name } = this.props;
    const { active } = this.state;
    return (
      <>
        <button className="test" type="button" onClick={this.toggleActive}>
          Hello {name}! Press to toggle Avatar
        </button>
        <div>
          <img width="300" src={active ? image1 : image2} alt="avatar" />
        </div>
        <Functional />
      </>
    );
  }
}
App.propTypes = {
  name: PropTypes.string.isRequired,
};
const AppWithHot = hot(module)(App);
const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="User" />, mountNode);