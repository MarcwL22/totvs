import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Container, Heading3 } from '../../../components';
// Components
import DashboardListItem from './DashboardListItem';

const ResultsText = styled(Heading3)`
  margin-bottom: 2rem;
  text-align: left;
`;

const DashboardList = ({ data, openModal }) => {
  return (
    <Container>
      <ResultsText>Resultado da busca</ResultsText>
      {data.map(repo => {
        return <DashboardListItem item={repo} key={repo.id} openModal={openModal} />;
      })}
    </Container>
  );
};

DashboardList.propTypes = {
  data: pT.array,
  openModal: pT.func
};

DashboardList.defaultProps = {
  data: [],
  openModal: () => {}
};

export default DashboardList;
