import styled from 'styled-components';

export const CoordSetterForm = styled.form`
    text-align: center;
    width:100%;
    min-width: 300px;
    z-index:2000;
    position: relative;
`

export const NewNodeInput = styled.input`
    background-color: #e9ecf1;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 20px;
    padding: 10px;
    border: none;
    outline: none;
    width: 93%;
    &::placeholder {
        color: darkslategray;
    }
`