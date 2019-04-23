import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import Wrapper from '../../components/Wrapper/Wrapper';
import { toggleAction } from '../../actions/toggleAction';

const Home = props => (
  <Wrapper isDarkMode={props.isDarkMode}>
    <div>
      <Link to={'chars'}>Navigate to character page</Link>
      <button onClick={() => props.toggleDarkMode()}>TOGGLE DARKMODE</button>
    </div>
  </Wrapper>
);

const mapStateToProps = state => ({
  isDarkMode: state.ui.darkmode
});

const mapDispatchToProps = dispatch => {
  return {
    toggleDarkMode: () => dispatch(toggleAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
