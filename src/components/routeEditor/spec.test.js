import React from 'react';
import { act } from 'react-test-renderer'
import { mount } from 'enzyme';
import deviseSizes from '../../responsiveDesign/deviceSizes';
import { addCoord, setYMapsApi } from '../../actions';
import { YMapsMock } from '../../testMocks';
import { testStore } from '../../store';
import { Provider } from 'react-redux';
import RouteEditor from './RouteEditor';


const resizeWindow = (x, y) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event('resize'));
}

describe('RouteEditor component', () => {
    let store, wrapper;
    const routeEditorLocator = "[test-data='routeEditor']";
    const mobileListOfCoordsLocator = "[test-data='mobileListOfCoords']";
    const yMapsApi = new YMapsMock();

    beforeEach(() => {
        store = testStore();
        store.dispatch(addCoord('Tes1', 1, 1));
        store.dispatch(addCoord('Tes2', 2, 2));
        store.dispatch(setYMapsApi(yMapsApi));
        wrapper = mount(<Provider store={store}><RouteEditor /></Provider>);
    });

    it('Should render without errors', () => {
        const routeEditor = wrapper.find(routeEditorLocator);
        expect(routeEditor.length).toBe(1);
    });

    it('Should correctly render mobile elements', () => {
        resizeWindow(deviseSizes.mobileMaxWidth, 1000);
        wrapper = mount(<Provider store={store}><RouteEditor /></Provider>);
        console.log(wrapper.debug());
        const mobileListOfCoords = wrapper.find(mobileListOfCoordsLocator);
        expect(mobileListOfCoords.length).toBe(1);
    });
});