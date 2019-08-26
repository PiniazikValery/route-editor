import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';
import { testStore } from '../../store';

describe('Map component', () => {
    it('Should render without errors', () => {
        const wrapper = shallow(<Map store={testStore()} />).childAt(0).dive();
        const map = wrapper.find("[test-data='yMaps']");
        expect(map.length).toBe(1);
    });
});