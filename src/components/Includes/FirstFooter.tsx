import { BrandLogo } from '@components/Atoms';
import Icon, { mailUnread, mapPin, phoneDialPad } from '@libs/icons';
import { useResponsive } from 'hooks';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

export const FirstFooter: FC = () => {
    const { isMobile } = useResponsive();

    return (
        <>
            <Wrapper $isMobile={isMobile}>
                <Container>
                    <Row>
                        <Col md={isMobile ? 12 : 6} sm={12}>
                            <div className='m-2'>
                                <BrandLogo />
                            </div>
                            <div className='m-3'>
                                <Icon className='me-3' fill='var(--bs-white)' path={mapPin} width={26} height={26} />
                                <span>Unit 14 -16, 1-13 Adler St, London E1 1EG</span>
                            </div>
                            <div className='m-3'>
                                <Icon
                                    className='me-3'
                                    fill='var(--bs-white)'
                                    path={phoneDialPad}
                                    width={26}
                                    height={26}
                                />
                                <span>020 7377 5055</span>
                            </div>
                            <div className='m-3'>
                                <Icon
                                    className='me-3'
                                    fill='var(--bs-white)'
                                    path={mailUnread}
                                    width={26}
                                    height={26}
                                />
                                <span>info@londoniumsolicitors.co.uk</span>
                            </div>

                            <Image
                                className='mt-3 ms-3'
                                src='/images/footer-image.png'
                                width={180}
                                height={120}
                                alt='logo'
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </Col>
                        <Col md={6} sm={12}>
                            <Row className='mt-3'>
                                <Col ms={12}>
                                    <div className='  d-flex flex-column align-items-start justify-content-between'>
                                        <h1 className='mb-2' style={{ fontSize: isMobile ? '1.1rem' : '1.375rem' }}>
                                            Links
                                        </h1>
                                        <Link href={'/'}>Home</Link>
                                        <Link href={'#about'}>About Us</Link>
                                        <Link href={'#service'}>Services</Link>
                                        <Link href={'#team'}>Team</Link>
                                        <Link href={'#our-fee'}>Our Fee</Link>
                                        <Link href={'#contact'}>Contact Us</Link>
                                    </div>
                                    <div className='  d-flex flex-column align-items-start justify-content-between'>
                                        <h1
                                            className='mb-2 mt-3'
                                            style={{ fontSize: isMobile ? '1.1rem' : '1.375rem' }}
                                        >
                                            Legal
                                        </h1>
                                        <Link href={'/'}>Team</Link>
                                        <Link href={'#about'}>Our Fee</Link>
                                        <Link href={'#service'}>Contact Us</Link>
                                    </div>
                                </Col>
                                {/* <Col ms={4}>
                                    <div className='d-flex flex-column align-items-start justify-content-between'>
                                        <h1
                                            className='mb-3'
                                            style={{ fontSize: isMobile ? '1.1rem' : '20px', whiteSpace: 'nowrap' }}
                                        >
                                            About Company
                                        </h1>
                                        <p>Our Testimonial</p>
                                        <p>Latest News</p>
                                        <p>Our Mission</p>
                                        <p>Get a free Quote</p>
                                    </div>
                                </Col> */}
                                <Col ms={6}>
                                    <div className='d-flex flex-column align-items-start justify-content-between'>
                                        <h1 className='mb-2' style={{ fontSize: isMobile ? '1.1rem' : '1.375rem' }}>
                                            Our Area of Services
                                        </h1>
                                        <Link href={'/'}>Family</Link>
                                        <Link href={'#about'}>Medical Negligence</Link>
                                        <Link href={'#service'}>Personal Injury</Link>
                                        <Link href={'#team'}>Housing Legal Aid</Link>
                                        <Link href={'#our-fee'}>Commercial Conveyancing</Link>
                                        <Link href={'#our-fee'}>Mental Health</Link>
                                        <Link href={'#team'}>Civil Litigation</Link>
                                        <Link href={'#our-fee'}>Crime</Link>
                                        <Link href={'#our-fee'}>Employment</Link>
                                        <Link href={'#our-fee'}>Immigration</Link>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>

            <FooterWrapper>
                {!isMobile ? (
                    <Container className='px-5 py-3'>
                        <Row className='mx-auto copyright-footer'>
                            <Col sm={6} className='mx-auto d-flex justify-content-between align-items-center'>
                                <p className='m-0 '>Copyright 2025 Londonium Solicitors. All rights reserved.</p>
                                <>|</>
                                <p className='m-0 '>Privacy Policy</p>
                                <>|</>
                                <p className='m-0'>Cookie Policy</p>
                                <>|</>
                                <p className='m-0'>Term & Conditions</p>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <>
                        <Container className='p-3'>
                            <p className='m-0 text-center'>Copyright 2025 Londonium Solicitors. All rights reserved.</p>

                            <div className='d-flex justify-content-between align-items-center mt-2'>
                                <p className='m-0'>Privacy Policy</p>
                                <>|</>
                                <p className='m-0'>Cookie Policy</p>
                                <>|</>
                                <p className='m-0'>Term & Conditions</p>
                            </div>
                        </Container>
                    </>
                )}
            </FooterWrapper>
        </>
    );
};

const Wrapper = styled.div<{ $isMobile: boolean }>`
    background-color: #0e0e0e;
    padding: ${({ $isMobile }) => ($isMobile ? '1rem' : '2rem 4rem')};
    color: var(--bs-white);

    a {
        text-decoration: none;
        color: var(--bs-white);
        margin-bottom: 0.125rem;
        /* font-weight: 300; */
    }
`;
const FooterWrapper = styled.div`
    .copyright-footer {
        p {
            white-space: nowrap;
        }
    }
`;
