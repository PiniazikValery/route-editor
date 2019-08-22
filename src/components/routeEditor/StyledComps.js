import styled from 'styled-components';
import { Menu, Close } from '@material-ui/icons';

export const RouteEditorItemsholder = styled.div`
    transition: 1s;
    margin-left: 2px;
    ${(props) => {
        if (props.mobile) {
            return 'width: 99%;';
        } else {
            return 'width: 30%;';
        }
    }}
    position: absolute;
`

export const HamburgerIcon = styled(Menu)`
    z-index: 2000;
    position: absolute;
    right: 0px;
    margin-top: 10px;
    margin-right: 5%;
`

export const CloseIcon = styled(Close)`
    z-index: 2000;
    position: absolute;
    right: 0px;
    margin-top: 10px;
    margin-right: 5%;
`