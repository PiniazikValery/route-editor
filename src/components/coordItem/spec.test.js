import React from 'react';
import { testStore } from '../../store';
import { shallow } from 'enzyme';
import { addCoord } from '../../actions';
import CoordItem from './CoordItem';

describe('CoordItem component', () => {
    let wrapper, store, itemName;
    beforeEach(() => {
        store = testStore();
        store.dispatch(addCoord('Test', 1, 1));
        const { name, id } = store.getState().coords.present.present[0];
        itemName = name;
        wrapper = shallow(
            <CoordItem store={store} mobile={false} name={name} id={id} />
        ).dive();
    });

    it('Should render without errors', () => {
        const deleteButton = wrapper.find("[test-data='deleteItemBtn']");
        expect(deleteButton.length).toBe(1);
    });

    it('Should render correct name', () => {
        const actualItemName = wrapper.find("[test-data='itemName']");
        expect(actualItemName.text()).toBe(itemName);
    });

    it('Should delete item from ui component', () => {
        const deleteButton = wrapper.find("[test-data='deleteItemBtn']");
        deleteButton.simulate('click');
        expect(store.getState().coords.present.present.length).toBe(0);
    });
});