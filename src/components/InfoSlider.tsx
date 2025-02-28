import Icon, { arrowLeftS, arrowRightS } from '@libs/icons';
import { FC, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { NavItemsEnums } from '../constants';

// About Us
// Londonium Solicitors stands as one of London's preeminent law firms, distinguished by our exceptional talent and unwavering commitment to excellence. Our organisation comprises highly motivated solicitors who consistently deliver exemplary legal services across a diverse range of practice areas, addressing our clients' most significant legal matters with precision and expertise.
// At Londonium Solicitors, our expertise in UK law spans a comprehensive range of legal specialties, delivered by dedicated teams of specialist solicitors committed to excellence in their respective fields.
// At the forefront of legal innovation, we deliver exceptional service through seamless collaboration. Our lawyers have cultivated strong relationships through their commitment to excellence, earning their position as trusted advisers. This expertise empowers us to shape positive outcomes and apply the law effectively for our clients.
// We take pride in our forward-thinking approach, consistently exceeding expectations through our focus on innovation and adaptability. Our teams work diligently to identify opportunities and manage risks for our clients. This commitment to excellence, combined with our strong values and dedication to sustainability, creates an environment where diverse perspectives thrive and make a decisive difference.
// Through our comprehensive expertise and client-focused approach, Londonium Solicitors ensures exceptional outcomes across all engagements, maintaining our position as a trusted legal partner in the UK.

// Blog Section
// Welcome to Londonium Solicitors' Legal Perspectives, where our experienced practitioners share their expert analysis of current legal developments. Our blog section features three distinct channels to keep you informed about the ever-evolving legal landscape:

// Case Studies
// Discover how we partner with clients to achieve successful outcomes through real-world examples of our legal expertise in action.
// Insights
// Access expert commentary on significant legal developments and industry trends, translated into practical guidance for your business needs.
// Updates
// Stay current with the latest changes in UK law and policy through our specialists' timely analysis and guidance.
// Analysis
// Explore our detailed examinations of landmark cases and legislative changes, with strategic interpretations for your legal considerations.
// Browse our latest articles below for essential legal developments that impact your interests.

// Slogans

// •	Providing Expert Legal Advice
// •	Putting clients first
// •	Legal Excellence, Advancing Your Interests
// •	Inclusive Expertise. Essential Outcomes

type InfoDataType = {
    topText: string;
    bottomText: string;
};

const infoData: InfoDataType[] = [
    {
        topText: 'Providing',
        bottomText: 'Expert Legal Advice',
    },
    {
        topText: 'Putting',
        bottomText: 'Clients first',
    },
    {
        topText: 'Legal Excellence',
        bottomText: 'Advancing Your Interests',
    },
    {
        topText: 'Inclusive Expertise',
        bottomText: 'Essential Outcomes',
    },
];

const InfoSlider: FC = () => {
    const [isTextHovered, setIsTextHovered] = useState<boolean>(false);
    return (
        <Wrapper
            id={NavItemsEnums.EXPERTISE}
            style={{
                backgroundColor: '#F5F7F7',
                height: '300px',
                padding: '1rem',
                margin: '0.5rem 0',
            }}
        >
            <Carousel
                data-bs-theme='dark'
                style={{
                    height: '100%',
                    // border: '1px solid red',
                    // backgroundColor: 'black',
                }}
                indicators={false}
                interval={5000}
                prevIcon={<Icon path={arrowLeftS} fill='#000000' width={60} height={60} />}
                nextIcon={<Icon path={arrowRightS} fill='#000000' width={60} height={60} />}
            >
                {infoData.map((item, index) => (
                    <Carousel.Item key={index}>
                        <Carousel.Caption className='text-center text-box'>
                            <h1 style={{ textTransform: 'uppercase' }} className='fade-text'>
                                {item.topText}
                            </h1>
                            <h1
                                onMouseEnter={() => setIsTextHovered(true)}
                                onMouseLeave={() => setIsTextHovered(false)}
                                className='swipe-animation-on-hover'
                                style={{ textTransform: 'uppercase' }}
                            >
                                {item.bottomText}
                            </h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
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

    .carousel-item {
        height: 100%;
        .carousel-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    /* .carousel-control-prev {
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
    } */
    .text-box {
        * {
            font-weight: 600;
        }
        .fade-text {
            color: #a2a3a3;
        }
    }
`;
