import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${props => (props.isDarkMode ? 'black' : 'white')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100%;
  flex-direction: column;
`;

export default Wrapper;
