import { getRowSize } from '@utils/index';
import styled from 'styled-components';
import { HeaderItemProps } from './constants';

type WrapperType = {
    backImage?: string;
} & Pick<HeaderItemProps, 'hoverimage' | 'gridColumn' | 'gridRow' | 'bgColor' | 'position'>;

export const ImageWrapper = styled.div<WrapperType>`
    position: relative;
    border: 4px solid white;
    overflow: hidden;
    cursor: pointer;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};
    /* transition: 0.6s; */
    &:before {
        transition: 0.6s;
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${({ backImage }) => `${backImage}`}) !important;
        background-position: ${({ position }) => position};
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hover-item {
        opacity: 0;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & button {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    &:hover {
        .hover-item {
            opacity: 1;
        }
    }
`;

export const Wrapper = styled.div<{ hoverimage?: string; width: number }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr) auto;
    grid-auto-rows: ${({ width }) => getRowSize(width)};
    /* transition: 0.5s; */
    background-image: url(${({ hoverimage }) => (hoverimage ? hoverimage : '/images/white-bg.jpg')});
    /* transition: background-image 0.3s; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: end;
    }

    .active {
        .hover-item {
            transition: 0.5s;
            position: relative;
            width: 100%;
            z-index: 99;
            background-color: transparent;
            &:hover {
                :before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #ffffffa8;
                    z-index: -1;
                }
            }
        }
    }

    .inactive {
        transition: 0.5s;
        padding: 0.625rem;
        &:before {
            transition: 0.5s;
            background-image: ${({ hoverimage }) => hoverimage && 'none'}!important;
        }

        background-color: ${({ hoverimage }) => (hoverimage ? 'transparent' : 'rgba(225, 225, 225, 0.721)')}!important;
        transition: opacity 0.3s;
    }

    .image-view {
        transition: 0.5s;
        overflow: hidden;

        &:hover {
            &:before {
                transform: scale(1.1);
            }
            /* transform: scale(1.1);  */
            /* background-size: 120%; */
            /* background-size: 120%; */
            // Scale the element to 110% of its original size
        }
    }
`;
