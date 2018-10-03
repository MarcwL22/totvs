import React from 'react';
import { shallow } from 'enzyme';
import { DashboardContainer } from './DashboardContainer';

describe('DashboardContainer', () => {
  let dashboard = shallow(<DashboardContainer />);
  it('should renders properly', () => {
    expect(dashboard).toMatchSnapshot();
  });
});
