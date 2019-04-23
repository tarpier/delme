import React from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import CharacterList from '../../components/CharacterList/CharacterList';
import Pagination from '../../components/Pagination/Pagination';
import Wrapper from '../../components/Wrapper/Wrapper';

class Chars extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: [],
      loading: true,
      error: false,
      currentPage: 1
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData(page = this.state.currentPage) {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => {
        if (!response.ok) {
          throw Error('API did not respond');
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          info: json.info,
          characters: json.results,
          loading: false,
          error: false
        });
      })
      .catch(() => this.setState({ error: true, loading: false }));
  }

  onPrevClick = () => {
    if (this.state.currentPage > 1) {
      const newPage = this.state.currentPage - 1;
      this.setState({ currentPage: newPage });
      this.fetchData(newPage);
    }
  };

  onNextClick = () => {
    const newPage = this.state.currentPage + 1;
    this.setState({ currentPage: newPage });
    this.fetchData(newPage);
  };

  render() {
    if (this.state.error) {
      return <div>ERROR</div>;
    }

    if (this.state.loading) {
      return <div>LOADING</div>;
    }
    return (
      <Wrapper isDarkMode={this.props.isDarkMode}>
        <CharacterList chars={this.state.characters && this.state.characters} />
        <Pagination
          onPrevClick={this.onPrevClick}
          currentPage={this.state.currentPage}
          onNextClick={this.onNextClick}
        />
        <Link to={'/'}>BACK TO HOME</Link>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  isDarkMode: state.ui.darkmode
});

export default connect(
  mapStateToProps,
  {}
)(Chars);
