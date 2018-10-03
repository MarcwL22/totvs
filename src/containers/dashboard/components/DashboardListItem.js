import React, { Component } from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Heading2, Paragraph } from '../../../components';
// Assets
import { BREAKPOINTS } from '../../../assets/variables';

const Item = styled.div`
  margin-bottom: 2rem;
`;
const ItemBox = styled.div`
  display: flex;
  padding: 2rem;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  align-items: center;
  border: solid 1px #ccc;
  justify-content: space-between;
  transition: all 0.3s;
  border-bottom-left-radius: ${props => (props.isOpen ? '0px' : '5px')};
  border-bottom-right-radius: ${props => (props.isOpen ? '0px' : '5px')};
`;
const ItemBoxInnerContainer = styled.div`
  display: flex;
`;
const ItemBoxAccordion = styled.div`
  padding: ${props => (props.isOpen ? '2rem 4rem' : '0rem 4rem')};
  background-color: #fff;
  border: solid 0px #ccc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-width: ${props => (props.isOpen ? '1px' : 0)};
  border-top-width: 0px;
  transform-origin: top;
  transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  height: ${props => (props.isOpen ? 'auto' : '0')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemBoxAccordionContainer = styled.div``;
const ItemGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => (props.withMarginLeft ? '2rem' : 0)};
`;
const ItemLegendText = styled.span`
  font-size: 1.2rem;
  color: #b3b3b3;
`;

const ExpandBtn = styled.a`
  color: purple;
  cursor: pointer;
  text-decoration: none;
  span {
    color: purple;
    font-size: 1.4rem;
    transition: all 0.2s;
    border-bottom: 1px solid transparent;
    @media (max-width: ${BREAKPOINTS.phone}) {
      display: none;
    }
  }
  svg {
    height: 1rem;
    margin-left: 0.5rem;
    fill: purple;
    transition: all 0.2s;
    transform: ${props => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    @media (max-width: ${BREAKPOINTS.phone}) {
      height: 2rem;
    }
  }
  &:hover span {
    border-bottom-color: purple;
  }
`;

const SeeMoreBtn = styled.button`
  font-size: 1.4rem;
  color: #fff;
  font-weight: 400;
  text-transform: uppercase;
  padding: 1rem 2rem;
  background-color: #ffd45d;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: #ffda64;
  }
`;

class DashboardListItem extends Component {
  state = {
    isOpen: false
  };

  openItem = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { item, openModal } = this.props;
    const { isOpen, height } = this.state;

    return (
      <Item>
        <ItemBox isOpen={isOpen}>
          <ItemBoxInnerContainer>
            <ItemGroup>
              <ItemLegendText>User</ItemLegendText>
              <Heading2>{item.owner.login}</Heading2>
            </ItemGroup>
            <ItemGroup withMarginLeft>
              <ItemLegendText>Project</ItemLegendText>
              <Heading2>{item.name}</Heading2>
            </ItemGroup>
          </ItemBoxInnerContainer>
          <ExpandBtn isOpen={isOpen} onClick={this.openItem}>
            <span>{isOpen ? 'Ocultar detalhes' : 'Ver detalhes'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </ExpandBtn>
        </ItemBox>
        <ItemBoxAccordion pHeight={height} isOpen={isOpen}>
          <ItemBoxAccordionContainer>
            {item.description !== '' && (
              <ItemGroup>
                <ItemLegendText>Descrição</ItemLegendText>
                <Paragraph>{item.description}</Paragraph>
              </ItemGroup>
            )}
            {item.language !== '' && (
              <ItemGroup>
                <ItemLegendText>Linguagem:</ItemLegendText>
                <Paragraph>{item.language}</Paragraph>
              </ItemGroup>
            )}
          </ItemBoxAccordionContainer>
          <SeeMoreBtn onClick={openModal} >ver mais</SeeMoreBtn>
        </ItemBoxAccordion>
      </Item>
    );
  }
}
DashboardListItem.propTypes = {
  item: pT.shape({
    id: pT.number,
    name: pT.string,
    description: pT.string,
    language: pT.string,
    owner: pT.shape({
      login: pT.string
    })
  }),
  openModal:pT.func
};
DashboardListItem.defaultProps = {
  item: {
    id: 0,
    name: 'Nome',
    description: 'Descrição',
    language: 'Javascript',
    owner: {
      login: 'Login'
    }
  },
  openModal: () => {}
};

export default DashboardListItem;
