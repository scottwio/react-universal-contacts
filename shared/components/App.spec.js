// libs
import React from 'react';
import { connect, Provider } from 'react-redux';
import { shallow } from 'enzyme';

// our imports
import {App} from 'components/App';

// store mocking
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('App', () => {
  it('renders', () => {
    const store = mockStore({ loading: { isLoading: false } });
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
});

