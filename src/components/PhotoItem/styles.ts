import { styled } from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;
    max-height: 280px;

    img{
        width: 100%;
        height: 200px;
        max-height: 200px;
        display: block;
        border-radius: 10px;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
        font-size: 14px;
        background-color: #D21312;
        border-radius: 8px;
        border: none;
        width: 100%;
        padding: 5px 0;
        cursor: pointer;

        .trash-class{
            font-size: 18px;
        }

        &:hover{
            opacity: 0.9;
        }
    }
`