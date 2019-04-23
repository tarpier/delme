import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 1.5rem 0;
`;

const Pagination = ({ onPrevClick, currentPage, onNextClick }) => {
  return (
    <Wrapper>
      <button onClick={() => onPrevClick()}>PREV</button>
      <span>{currentPage}</span>
      <button onClick={() => onNextClick()}>NEXT</button>
    </Wrapper>
  );
};

Pagination.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  onNextClick: PropTypes.func.isRequired
};

export default Pagination;
