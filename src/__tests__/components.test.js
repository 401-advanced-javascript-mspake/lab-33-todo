import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';


describe('App', () => {
  it('Can add an item to the list', () => {
    const app = mount(<App />);

    const noItemYet = app.find('li');
    expect(noItemYet.length).toBe(0);

    const addItem = app.find('#add');

    function mockReset() { return ''; }

    const mockEvent = { 
      target: { 
        reset: mockReset, 
        value: 'nap', 
      }, 
      preventDefault: () => {},
    };
    addItem.simulate('change', mockEvent);
    addItem.simulate('submit', mockEvent);

    const item = app.find('li');
    expect(item.length).toBe(1);
  });
});
