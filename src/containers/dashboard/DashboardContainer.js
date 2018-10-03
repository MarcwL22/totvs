import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';
// UIComponents
import { CenterContent, Loading } from '../../components';
// Components
import DashboardModal from './components/DashboardModal';
import DashboardList from './components/DashboardList';
import DashboardResultInfo from './components/DashboardResultInfo';
import DashboardHeader from './components/DashboardHeader';

const DashboardSectionContent = styled.div`
  min-height: 70vh;
  position: relative;
`;

export class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      loading: false,
      repositoriesList: [],
      error: false,
      modalOpen: false
    };
  }

  onChangeText = e => {
    const { value } = e.target;
    this.setState({ searchInput: value });
  };

  openModal = () => this.setState({ modalOpen: true });

  searchFormSubmit = e => {
    e.preventDefault();
    const { searchInput } = this.state;
    this.setState({ loading: true }, () => {
      axios
        .get(`https://api.github.com/users/${searchInput}/repos`)
        .then(({ data }) => this.setState({ loading: false, repositoriesList: data, error: false }))
        .catch(() => this.setState({ loading: false, error: true, repositoriesList: [] }));
    });
  };

  renderContent = () => {
    const { loading, repositoriesList, error } = this.state;
    const Content = () => {
      if (loading) {
        return <Loading />;
      } else if (!loading && error) {
        return <DashboardResultInfo type="error" />;
      } else {
        return <DashboardResultInfo />;
      }
    };
    if (repositoriesList.length === 0) {
      return <CenterContent>{Content()}</CenterContent>;
    }
    return <DashboardList data={repositoriesList} openModal={this.openModal} />;
  };

  render() {
    const { searchInput, modalOpen } = this.state;
    return (
      <Fragment>
        <DashboardHeader onChangeText={this.onChangeText} value={searchInput} onSubmit={this.searchFormSubmit} />
        <main>
          <DashboardSectionContent>{this.renderContent()}</DashboardSectionContent>
        </main>
        <DashboardModal modalOpen={modalOpen} closeModal={() => this.setState({ modalOpen: false })} />
      </Fragment>
    );
  }
}

export default DashboardContainer;
