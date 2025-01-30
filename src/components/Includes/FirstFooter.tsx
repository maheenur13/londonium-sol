import Icon, { mailUnread, mapPin, phoneDialPad } from '@libs/icons';
import { useResponsive } from 'hooks';
import Image from 'next/image';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const FirstFooter: FC = () => {
    const { isMobile } = useResponsive();

    return (
        <>
            <Wrapper $isMobile={isMobile}>
                <Row>
                    <Col md={isMobile ? 12 : 6} sm={12} >
                        <div className='m-2'>
                            <Image src={'/images/bottom-log.png'} width={220} height={70} alt='image' />
                        </div>
                        <div className='m-3'>
                            <Icon className='me-3' fill='var(--bs-white)' path={mapPin} width={26} height={26} />
                            <span>Unit 14 -16, 1-13 Adler St, London E1 1EG</span>
                        </div>
                        <div className='m-3'>
                            <Icon className='me-3' fill='var(--bs-white)' path={phoneDialPad} width={26} height={26} />
                            <span>020 7377 5055</span>
                        </div>
                        <div className='m-3'>
                            <Icon className='me-3' fill='var(--bs-white)' path={mailUnread} width={26} height={26} />
                            <span>info@londoniumsolicitors.co.uk</span>
                        </div>
                    </Col>
                    <Col md={6} sm={12} >
                        <Row className='mt-3'>
                            <Col ms={12} >
                                <div className='  d-flex flex-column align-items-start justify-content-between'>
                                    <h1 className='mb-3' style={{ fontSize: isMobile ? '1.1rem' : '20px' }}>
                                        Links
                                    </h1>
                                    <p>Home</p>
                                    <p>About Us</p>
                                    <p>Services</p>
                                    <p>Team</p>
                                    <p>Blog</p>
                                </div>
                            </Col>
                            <Col ms={4} >
                                <div className='d-flex flex-column align-items-start justify-content-between'>
                                    <h1 className='mb-3' style={{ fontSize: isMobile ? '1.1rem' : '20px', whiteSpace: 'nowrap' }}>
                                        About Company
                                    </h1>
                                    <p>Our Testimonial</p>
                                    <p>Latest News</p>
                                    <p>Our Mission</p>
                                    <p>Get a free Quote</p>
                                </div>
                            </Col>
                            <Col ms={4} >
                                <div className='d-flex flex-column align-items-start justify-content-between'>
                                    <h1 className='mb-3' style={{ fontSize: isMobile ? '1.1rem' : '20px' }}>
                                        Services
                                    </h1>
                                    <p>App Development</p>
                                    <p>Web Development</p>
                                    <p>Graphics Design</p>
                                    <p>App Design</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12}>
                        <div className='mt-5 d-flex flex-wrap justify-content-center'>
                            <Col xs={6} md={3} className='text-center'>
                                <p>Privacy Policy</p>
                            </Col>
                            <Col xs={6} md={3} className='text-center'>
                                <p>Cookie Policy</p>
                            </Col>
                            <Col xs={6} md={3} className='text-center'>
                                <p>Term & Conditions</p>
                            </Col>
                            <Col xs={6} md={3} className='text-center'>
                                <p>Contact Us</p>
                            </Col>
                        </div>
                    </Col>
                </Row>
            </Wrapper>
            <div className='p-4 bg-white'>
                <p style={{ color: 'rgba(75, 75, 75, 0.5)' }} className='m-0 text-center'>
                    @ Copyright 2023 Londonium Solicitors. All rights reserved.
                </p>
            </div>
        </>
    );
};

const Wrapper = styled.div<{ $isMobile: boolean }>`
    background-color: #a9aeba;
    padding: ${({ $isMobile }) => ($isMobile ? '1rem' : '2rem 4rem')};
    color: var(--bs-white);
`;
