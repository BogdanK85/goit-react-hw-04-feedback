import { styled } from "styled-components"

export const FeedbackButtonWrap = styled.ul`
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin: 0;
    gap:25px;
    list-style: none;
`

export const ButtonFeedback = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    width: 100%;
    heigth: 45px;
    borded: none;
    border-radis: 8px;
    color: #ee0a0a;
    &hover: {
        backgroundColor: rgb(40, 243, 243);
    }
    &active: {
        font-size: 22px;
    }
`