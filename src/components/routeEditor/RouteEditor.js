import React, { memo, useState, useEffect } from 'react';
import { RouteEditorItemsholder, HamburgerIcon, CloseIcon } from './StyledComps';
import { connect } from 'react-redux';
import { CoordsSetter } from '../coordsSetter';
import { ListOfCoords } from '../listOfCoords';
import deviseSizes from '../../responsiveDesign/deviceSizes';
import { Mobile, Desktop } from '../../responsiveDesign';

const RouteEditor = memo(({ yMaps, coords }) => {
    const [isMobile, setMoblie] = useState(undefined);
    const [isMobileListOfRoutesOpen, setMobileListOfRoutesOpen] = useState(false);

    useEffect(() => {
        updateAfterResize();
        window.addEventListener('resize', updateAfterResize);
    }, []);

    useEffect(() => {
        return () => {
            window.removeEventListener('resize', updateAfterResize);
        }
    }, []);

    const updateAfterResize = () => {
        if (window.innerWidth <= deviseSizes.mobileMaxWidth) {
            setMoblie(true);
        }
        if (window.innerWidth >= deviseSizes.desktopMinWidth) {
            setMobileListOfRoutesOpen(false);
            setMoblie(false);
        }
    }

    const OpenCloseMobileListOfRoutes = () => {
        setMobileListOfRoutesOpen(!isMobileListOfRoutesOpen);
    }

    return (
        <div test-data="routeEditor">
            {yMaps ? [
                <RouteEditorItemsholder test-data="desktopItemsHolder" key="desktop" mobile={isMobile}>
                    <CoordsSetter />
                    <Desktop>
                        <ListOfCoords />
                    </Desktop>
                </RouteEditorItemsholder>,
                <Mobile key="mobile">
                    {isMobileListOfRoutesOpen ? <ListOfCoords test-data="mobileListOfCoords" mobile={isMobile} /> : <div />}
                    <div test-data="openListOfCoordsBtn" onClick={OpenCloseMobileListOfRoutes}>
                        {coords.present.present.length >= 1 ? (isMobileListOfRoutesOpen ? <CloseIcon /> : <HamburgerIcon />) : undefined}
                    </div>
                </Mobile>
            ]
                : undefined}
        </div>
    );
});

const mapStateToProps = state => ({
    yMaps: state.yMaps,
    coords: state.coords
});

export default connect(mapStateToProps)(RouteEditor);