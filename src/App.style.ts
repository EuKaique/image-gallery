import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px; 
`

export const ScreenLoading = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
`

export const Form = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    label{
        color: #756DF4;
        border: 1px solid #756DF4;
        margin-right: 2rem;
        padding: 8px 16px;
        border-radius: 10px;
        cursor: pointer;

        &:hover{
            color: #FFF;
            background-color: #756DF4;
            transition: 0.2s;
        }
    }

    input[type=file]{
        display: none;
    }

    input[type=submit]{
        background-color: #756DF4;
        border: none;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 1rem;
        cursor: pointer;

        &:hover{
            opacity: 0.9;
        }
    }
`