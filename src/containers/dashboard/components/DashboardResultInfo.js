import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UI Components
import { Heading3 } from '../../../components';
// Assets
import PaperMagnifySvg from '../../../assets/images/paper-magnify.svg';
import CrossSvg from '../../../assets/images/cross.svg';

const NoContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ResultSvg = styled.img`
  height: 7rem;
  margin-bottom: 1rem;
`;

const DashboardResultInfo = ({ type }) => {
  const svgImg = type === 'empty' ? PaperMagnifySvg : CrossSvg;
  const message =
    type === 'empty' ? 'Você ainda não procurou por nada' : 'Ops! Não achamos nada ou ocorreu algum problema';
  return (
    <NoContentContainer>
      <ResultSvg src={svgImg} alt="resultImg" />
      <Heading3>{message}</Heading3>
    </NoContentContainer>
  );
};

DashboardResultInfo.propTypes = {
  type: pT.oneOf(['error', 'empty'])
};
DashboardResultInfo.defaultProps = {
  type: 'empty'
};

export default DashboardResultInfo;
