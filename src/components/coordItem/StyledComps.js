import styled from 'styled-components';
import Icon from '@material-ui/icons/Delete';

export const CoordItemBox = styled.div`
    white-space: nowrap;
    border-radius: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    ${(props) => {
        if (!props.mobile) {
            return 'position: relative;';
        }
    }}
    height: 100px;
    background-color:  rgba(128, 128, 128, 0.7);
    text-align: center;
    line-height: 100px;
`

export const DeleteButton = styled(Icon)`
    position: absolute;
    cursor: pointer;
    color: red;
    ${(props) => {
        if (!props.mobile) {
            return 'opacity: 0.3;';
        }
    }}    
    left: 0px;
    &:hover{
        opacity: 1;
    }
`