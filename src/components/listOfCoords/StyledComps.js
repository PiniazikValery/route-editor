import styled from 'styled-components';

export const DragDropContextHolder = styled.div`
    position: relative;
    z-index: 2000;
    overflow-y: scroll;
    max-height: 90vh;
    overflow-x: hidden;
    &::-webkit-scrollbar {
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