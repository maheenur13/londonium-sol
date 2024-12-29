import styled from 'styled-components';

export const ImageWrapper = styled.div<{ backImage?: string; hoverimage: string }>`
    position: relative;
    padding: 0.625rem;

    background-image: url(${({ hoverimage }) => hoverimage}) !important;
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.2; */
    background-attachment: ${({ hoverimage }) => hoverimage && 'fixed'};

    background-color: red;

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(255, 255, 255, 0.5); */
        background-repeat: no-repeat;
        background-size: cover;
        opacity: ${({ hoverimage }) => (hoverimage ? 0 : 1)};
        background-image: url(${({ backImage }) => backImage}) !important;
        transition: opacity 0.5s;
    }
    .hover-item {
        opacity: 0;
        transition: 0.6s;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.7);
        & button {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    &:hover {
        transition: opacity 0.6s;
        .hover-item {
            opacity: 1;

            transition: opacity 0.6s;
        }
    }
`;

export const Wrapper = styled.div<{ hoverimage: string }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr) auto;
    gap: 10px;
    grid-auto-rows: 130px;
    /* align-items: center; */
    transition: 0.5s;
    /* background-color: red; */

    div {
        display: flex;
        justify-content: flex-start;
        align-items: end;
    }
    .one {
        background-color: #edf0f2;
        grid-column: 1;
        grid-row: 1;
    }
    .two {
        background-color: #edf0f2;
        grid-column: 1;
        grid-row: 2 / 5;
    }
    .three {
        background-color: #edf0f2;
        grid-column: 2 / 4;
        grid-row: 1 / 4;
    }
    .four {
        background-color: #edf0f2;
        grid-column: 2 / 4;
        grid-row: 4;
    }
    .five {
        background-color: #edf0f2;
        grid-column: 4 / 6;
        grid-row: 1;
    }
    .six {
        background-color: #edf0f2;
        grid-column: 4 / 6;
        grid-row: 2 / 5;
    }
    .seven {
        background-color: #edf0f2;
        grid-column: 6 / 8;
        grid-row: 1 / 3;
    }
    .eight {
        background-color: #edf0f2;
        grid-column: 6;
        grid-row: 3 / 5;
    }
    .nine {
        background-color: #edf0f2;
        grid-column: 8 / 10;
        grid-row: 1 / 3;
    }
    .ten {
        background-color: #edf0f2;
        grid-column: 7 / 10;
        grid-row: 3/ 5;
    }
    .eleven {
        background-color: #edf0f2;
        grid-column: 10;
        grid-row: 1 / 3;
    }
    .twelve {
        background-color: #edf0f2;
        grid-column: 10;
        grid-row: 3 / 5;
    }

    /* @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: minmax(150px, auto);

        .two {
            grid-row: 2 / 4;
        }
        .three {
            grid-column: 1 / 3;
            grid-row: 4;
        }
        .four {
            grid-column: 3 / 5;
            grid-row: 1 / 4;
        }
        .six {
            grid-row: 4 / 6;
        }
        .seven {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
        }
        .eight {
            grid-row: 3 / 5;
        }
        .nine {
            grid-column: 3 / 5;
            grid-row: 1 / 3;
        }
        .ten {
            grid-column: 1 / 6;
            grid-row: 5;
        }
        .eleven {
            display: none;
        }
        .twelve {
            display: none;
        }
    } */
`;
