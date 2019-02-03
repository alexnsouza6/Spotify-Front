import React from 'react';
import { shallow } from 'enzyme';
import moxios from 'moxios';
import renderer from 'react-test-renderer';
import Dashboard from '../Dashboard';
import '../../setupTests';

const userMock = {
  data: {
    username: 'Alex Souza',
  },
};

const artistsMock = {
  data: [
    { name: 'Kendrick', images: [{ url: '123123.com' }], followers: { total: 10 } },
    { name: 'Lamar', images: [{ url: '321321.com' }], followers: { total: 20 } },
  ],
};

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://localhost:3000/api/v1/user', {
    status: 200,
    response: userMock,
  });
  moxios.stubRequest('http://localhost:3000/api/v1/artists', {
    status: 200,
    response: artistsMock,
  });
});

afterEach(() => {
  moxios.uninstall();
});

describe('when testing states', () => {
  it('sets user state', done => {
    const component = shallow(<Dashboard />);
    setTimeout(() => {
      expect(component.state().user).toEqual(userMock);
      done();
    });
  });
  it('sets artists state', done => {
    const component = shallow(<Dashboard />);
    setTimeout(() => {
      expect(component.state().artists).toEqual(artistsMock);
      done();
    });
  });
});

describe('when testing html aspects', () => {
  it('renders list items correctly', () => {
    const component = shallow(<Dashboard />);
    setTimeout(() => {
      expect(component.find('li').length).toEqual(artistsMock.data.length);
    });
  });
});
