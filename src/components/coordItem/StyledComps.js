import styled from 'styled-components';
import Icon from '@material-ui/icons/Delete';

export const CoordItemBox = styled.div`
    border-radius: 10px;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 95%;
    position: relative;
    height: 100px;
    background-color:  rgba(128, 128, 128, 0.7);
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
`

export const DeleteButton = styled(Icon)`
    position: absolute;
    cursor: pointer;
    color: red;
    opacity: 0.3;
    left: 0px;
    &:hover{
        opacity: 1;
    }
`