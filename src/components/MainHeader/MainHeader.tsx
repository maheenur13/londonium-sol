import { FC, useState } from 'react';

import styled from 'styled-components';
import { galleryArray, HeaderItemProps } from './constants';

export const MainHeader: FC = () => {
    const [bgImage, setBgImage] = useState<any>(null);
    const [isHoveredIndex, setIsHoveredIndex] = useState<any>(null);
    const handleHoverOnImage = (item: any, index: number) => {
        console.log(item);
        setIsHoveredIndex(index);
        setBgImage(item?.bgImage);
    };
    return (
        <Wrapper
            hoverimage={bgImage}
            className='wrapper px-2 mx-4'
        // bgImage={bgImage}
        >
            {/* <div className='bg-image-container'></div> */}
            {galleryArray.map((item, idx) => (
                <ImageWrapper
                    onMouseLeave={() => {
                        // console.log('leaving');

                        setIsHoveredIndex(null);
                        setBgImage(null);
                    }}
                    onMouseEnter={() => handleHoverOnImage(item, idx)}
                    backImage={item?.image}
                    gridColumn={item.gridColumn}
                    gridRow={item.gridRow}
                    bgColor={'#edf0f2'}
                    key={idx}
                    hoverimage={bgImage}
                >
                    {!item?.image && !bgImage && item.title}

                    <div className='hover-item'>
                        {item?.bgImage && (
                            <div className=' p-2 d-flex  flex-column justify-content-between text-start h-100 border align-items-start'>
                                <h1>{item?.bgImage && item.title}</h1>
                                <p>Start Your Claim</p>
                            </div>
                        )}
                    </div>

                    {/* {item.image && <Image src={item.image} fill alt={`image-${item.title}`} />} */}
                </ImageWrapper>
            ))}
        </Wrapper>
    );
};



const ImageWrapper = styled.div<Pick<HeaderItemProps, 'hoverimage' | 'gridColumn' | 'gridRow' | 'bgColor' | 'backImage'>>`
    position: relative;
    padding: 0.625rem;

    background-image: url(${({ hoverimage }) => hoverimage}) !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-origin: padding-box; */
    background-attachment: ${({ hoverimage }) => hoverimage && 'fixed'};
    background-position: center;

    background-color: ${props => props.bgColor};
    grid-column: ${props => props.gridColumn};
    grid-row: ${props => props.gridRow};
    /* transition: 0.1s; */

    &:before {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
    }

    &:hover {
        transition: opacity 0.6s;
        .hover-item {
            opacity: 1;

            transition: opacity 0.6s;
        }
    }

    /* .hover-item {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        opacity: 1;
    } */
`;


const Wrapper = styled.div<{ hoverimage: string }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr) auto;
    gap: 10px;
    grid-auto-rows: 130px;
    transition: 0.5s;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: end;
    }
    
  
`;
