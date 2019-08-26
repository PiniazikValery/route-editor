import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
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
    const desktopItemsHolderLocator = "[test-data='desktopItemsHolder']";
    const openListOfCoordsBtnLocator = "[test-data='openListOfCoordsBtn']";
    const yMapsApi = new YMapsMock();

    beforeEach(() => {
        store = testStore();
        store.dispatch(addCoord('Tes1', 1, 1));
        store.dispatch(addCoord('Tes2', 2, 2));
        store.dispatch(setYMapsApi(yMapsApi));
        wrapper = shallow(<RouteEditor store={store} />).childAt(0).dive();
    });

    it('Should render without errors', () => {
        const routeEditor = wrapper.find(routeEditorLocator);
        expect(routeEditor.length).toBe(1);
    });

    it('Should correctly switch to mobile version', () => {
        wrapper = mount(<Provider store={store}><RouteEditor /></Provider>);
        act(() => {
            resizeWindow(deviseSizes.mobileMaxWidth, 1000);
        });
        const desktopItemsHolder = wrapper.find(desktopItemsHolderLocator);
        expect(desktopItemsHolder.get(0).props.mobile).toBe(true);
    });

    it('Should correctly open mobile list of coords', () => {
        const openListOfCoordsBtn = wrapper.find(openListOfCoordsBtnLocator);
        openListOfCoordsBtn.simulate('click');
        const mobileListOfCoords = wrapper.find(mobileListOfCoordsLocator);
        expect(mobileListOfCoords.length).toBe(1);
    });
});