import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UI Components
import { ModalComponent, Heading3 } from '../../../components';

const ModalHeading = styled(Heading3)`
  margin-bottom: 2rem;
  color: #000;
`;

const DashboardModal = ({ closeModal = () => {}, modalOpen = false }) => {
  return (
    <ModalComponent onAccept={closeModal} onDecline={closeModal} isOpen={modalOpen}>
      <ModalHeading>Tem certeza que deseja ir para a tela?</ModalHeading>
    </ModalComponent>
  );
};

DashboardModal.propTypes = {
  closeModal: pT.func,
  modalOpen: pT.bool
};

export default DashboardModal;
