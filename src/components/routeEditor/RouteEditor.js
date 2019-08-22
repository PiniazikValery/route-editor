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
        <div>
            <RouteEditorItemsholder mobile={isMobile}>
                {yMaps ?
                    [<div key="coordsSetter">
                        <CoordsSetter />
                    </div>,
                    <div key="listOfCoords">
                        <Desktop>
                            <ListOfCoords />
                        </Desktop>
                    </div>]
                    : undefined}
            </RouteEditorItemsholder>
            <Mobile>
                {isMobileListOfRoutesOpen ? <ListOfCoords mobile={isMobile} /> : <div />}
                <div onClick={OpenCloseMobileListOfRoutes}>
                    {coords.present.present.length >= 1 ? (isMobileListOfRoutesOpen ? <CloseIcon /> : <HamburgerIcon />) : undefined}
                </div>
            </Mobile>
        </div>
    );
});

const mapStateToProps = state => ({
    yMaps: state.yMaps,
    coords: state.coords
});

export default connect(mapStateToProps)(RouteEditor);