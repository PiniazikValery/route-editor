import React from 'react';
import { testStore } from '../../store';
import { mount } from 'enzyme';
import { addCoord, dndCoord } from '../../actions';
import ListOfCoords from './ListOfCoords';
import { Provider } from 'react-redux';

describe('ListOfCoords component', () => {
    let wrapper, store, firstElementId, secondElementId;
    const listOfPlacesLocator = "[test-data='listOfPlaces']";
    const placesLocator = "[test-data='place']";

    beforeEach(() => {
        store = testStore();
        store.dispatch(addCoord('Tes1', 1, 1));
        store.dispatch(addCoord('Tes2', 2, 2));
        firstElementId = store.getState().coords.present.present[0].id;
        secondElementId = store.getState().coords.present.present[1].id;
        wrapper = mount(<Provider store={store}><ListOfCoords /></Provider>);
    });

    it('Should render without errors', () => {
        let listOfPlaces = wrapper.find(listOfPlacesLocator);
        expect(listOfPlaces.length).toBe(1);
    });

    it('Should render correct number of places', () => {
        let places = wrapper.find(placesLocator);
        expect(places.length).toBe(2);
    });

    it('Should handle dnd action without errors', () => {
        store.dispatch(dndCoord(0, 1));
        wrapper.update();
        let places = wrapper.find(placesLocator);
        const firstElementInPlace = places.get(0).props['test-data-coord-id'] === secondElementId;
        const secondElementInPlace = places.get(1).props['test-data-coord-id'] === firstElementId;
        expect(
            firstElementInPlace
            &&
            secondElementInPlace
        )
            .toBe(true);
    });
});