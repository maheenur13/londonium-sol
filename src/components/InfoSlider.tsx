import Icon, { arrowLeftS, arrowRightS } from '@libs/icons';
import { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

const InfoSlider: FC = () => {
    return (
        <Wrapper
            style={{
                backgroundColor: '#F5F7F7',
                height: '300px',
                padding: '1rem',
                margin: '0.5rem 0',
            }}
        >
            <Carousel
                style={{
                    height: '100%',
                    // border: '1px solid red',
                    // backgroundColor: 'black',
                }}
                indicators={false}
                // interval={5000}
                prevIcon={<Icon path={arrowLeftS} fill='#000000' width={60} height={60} />}
                nextIcon={<Icon path={arrowRightS} fill='#000000' width={60} height={60} />}
            >
                <Carousel.Item>
                    <div className='text-center text-box'>
                        <h1 className='fade-text'>PROVIDING</h1>
                        <h1>EXPERT ADVICE</h1>
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <h1>Hello world</h1>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>Hello world</h1>
                </Carousel.Item> */}
            </Carousel>
        </Wrapper>
    );
};

export default InfoSlider;

const Wrapper = styled.div`
    .carousel-control-prev {
        opacity: 1;
        left: 25% !important;
    }
    .carousel-control-next {
        opacity: 1;
        right: 25% !important;
    }
    .carousel-inner {
        z-index: 99;
        height: 100%;
    }
    .carousel-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        /* border: 1px solid green; */
    }
    .text-box {
        * {
            font-weight: 600;
        }
        .fade-text {
            color: #a2a3a3;
        }
    }
`;
