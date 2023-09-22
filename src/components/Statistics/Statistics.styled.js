import { styled } from "styled-components";

export const StatisticsListWrap = styled.ul`
    list-style: none;
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;

    .li {
        font-size: 26px;
        font-weight: 800;
        margin: 0;
    }

`
export const StatItem = styled.li`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
`