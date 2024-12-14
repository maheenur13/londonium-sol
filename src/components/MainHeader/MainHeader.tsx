import { FC, useState } from 'react';

import styled from 'styled-components';
import { galleryArray } from './constants';

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
                    className={`${item.className} childItem`}
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

const ImageWrapper = styled.div<{ backImage?: string; hoverimage: string }>`
    position: relative;
    padding: 0.625rem;

    background-image: url(${({ hoverimage }) => hoverimage}) !important;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /* background-origin: padding-box; */
    background-attachment: ${({ hoverimage }) => hoverimage && 'fixed'};
    background-position: center;
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
    /* align-items: center; */
    transition: 0.5s;

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
const WithoutImage = styled.div`
    background-color: #edf0f2;
`;
const WithImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #edf0f2;
`;

{
    /* <Wrapper className='p-3'>
            <Row className='m-auto'>
                <Col md={1} style={{ height: '450px', border: '1px solid red' }}>
                    <Row className=' mx-auto my-auto w-100 h-100 border border-success'>
                        <Col md={12} className='w-100  h-25 p-0 pb-1'>
                            <WithoutImage className='p-2 h-100'>
                                <h6>Public</h6>
                            </WithoutImage>
                        </Col>
                        <Col md={12} className='flex-grow-1 h-75 p-0 pt-1'>
                            <WithImage>
                                <Image src='/images/image-1.png' alt='image1' fill />
                            </WithImage>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} style={{ height: '450px', border: '1px solid red' }}>
                    <Row className='g-2 mx-auto my-auto w-100 h-100 border border-success'>
                        <Col md={12} className='h-75'>
                            <WithoutImage className='w-100 h-100'>Public</WithoutImage>
                        </Col>
                        <Col md={12} className='h-25'>
                            <WithImage className='h-100'>
                                <Image src='/images/image-2.png' alt='image1' fill />
                            </WithImage>
                        </Col>
                    </Row>
                </Col>
                <Col md={3} style={{ height: '450px', border: '1px solid red' }}>
                    ok2
                </Col>
                <Col md={4} style={{ height: '450px', border: '1px solid red' }}>
                    ok3
                </Col>
                <Col md={1} style={{ height: '450px', border: '1px solid red' }}>
                    ok3
                </Col>
            </Row>
        </Wrapper> */
}
