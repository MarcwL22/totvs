import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Container, Heading1 } from '../../../components';
// Variables
import { BREAKPOINTS } from '../../../assets/variables';
import MaginifyImg from '../../../assets/images/magnifier.svg';

const SearchSection = styled.header`
  position: relative;
  background: linear-gradient(90deg, #467edc, #2643dc);
  min-height: 30vh;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled(Container)`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  width: 50%;
  margin: 0 auto;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    width: 70%;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-width: 0;
  transition: all 0.2s;
  &:focus {
    outline: none;
    background-color: #f8f8f8;
  }
`;
const SearchButton = styled.button`
  cursor: pointer;
  padding: 0rem 2rem;
  background-color: #ffda64;
  border-top-right-radius: 3px;
  border-width: 0;
  border-bottom-right-radius: 3px;
  transition: all 0.2s;
  &:hover {
    background-color: #c1991b;
  }
  img {
    height: 2rem;
  }
`;

const DashboardHeader = ({ onSubmit, onChangeText, value }) => {
  return (
    <SearchSection>
      <SearchContainer>
        <Heading1>Repo</Heading1>
        <Form onSubmit={onSubmit}>
          <SearchInput type="text" value={value} placeholder="Procure por um repositório" onChange={onChangeText} />
          <SearchButton type="submit">
            <img src={MaginifyImg} alt="MagnifyImg" />
          </SearchButton>
        </Form>
      </SearchContainer>
    </SearchSection>
  );
};

DashboardHeader.propTypes = {
  onSubmit: pT.func,
  onChangeText: pT.func,
  value: pT.string
};
DashboardHeader.defaultProps = {
  onSubmit: () => {},
  onChangeText: () => {},
  value: ''
};

export default DashboardHeader;
