import styled from 'styled-components';

export const StyledList = styled.ul`
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100vw;
    background-color: gray;

    * {
        text-align: center;
        text-decoration: none;
        font-size: 1.25rem;
        color: white;
        padding: 8px 10px;
        margin: 5px;
        cursor: color;

        &:hover {
            background-color: lightgray;
        }
    }
`