import React from 'react';
import { testStore } from '../../store';
import { shallow } from 'enzyme';
import CoordsSetter from './CoordsSetter';
import { setYMapsApi } from '../../actions';
import { YMapsMock } from '../../testMocks';

describe('CoordsSetter component', () => {
    let wrapper, store;
    const nodeInputLocator = "[test-data='newNodeInput']";
    beforeEach(() => {
        const yMapsMock = new YMapsMock();
        store = testStore();
        store.dispatch(setYMapsApi(yMapsMock));
        wrapper = shallow(<CoordsSetter store={store} />).childAt(0).dive();
    });

    it('Should render without errors', () => {
        const newNodeInput = wrapper.find(nodeInputLocator);
        expect(newNodeInput.length).toBe(1);
    });

    it('Should render node input typing', () => {
        const place = 'Moscow';
        wrapper.find(nodeInputLocator).simulate('change', { target: { value: place } });
        const newNodeInput = wrapper.find(nodeInputLocator);
        expect(newNodeInput.prop('value')).toBe(place);
    });

    it('Should add new node', (done) => {
        const place = 'Moscow';
        wrapper.find(nodeInputLocator).simulate('change', { target: { value: place } });
        wrapper.find(nodeInputLocator).simulate('keydown', { key: 'Enter', keyCode: 13, which: 13 });
        setImmediate(() => {
            expect(store.getState().coords.present.present.length).toBe(1);
            done();
        });
    });
});