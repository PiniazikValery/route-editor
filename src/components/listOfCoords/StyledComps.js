import styled from 'styled-components';

export const DragDropContextHolder = styled.div`
    ${(props) => {
        if (props.mobile) {
            return `
                position: absolute;
                top: 50px;
                width: 99%;
                margin-left: 5px;
            `;
        } else {
            return 'position: relative;';
        }
    }}
    box-sizing : border-box;
    z-index: 2000;
    overflow-y: scroll;
    max-height: 90vh;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        position: absolute;
        width: 5px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background: gray; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: #b30000; 
    }
`