import styled from 'styled-components';

export const CoordSetterForm = styled.form`
    transition: 1s;
    z-index:2000;
    position: relative;
`

export const NewNodeInput = styled.input`
    box-sizing: border-box;
    background-color: #e9ecf1;
    margin-top: 5px;
    padding-left: 10px;
    margin-bottom: 5px;
    border-radius: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    box-shadow: 5px 5px 5px #888888;
    border: none;
    width: 99%;
    outline: none;
    &::placeholder {
        color: darkslategray;
    }
`