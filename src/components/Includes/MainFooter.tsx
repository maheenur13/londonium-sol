import Icon, { facebookCircleFill, instagramFill, linkedinFill, mapPinFull, phoneDialPad, twitter } from '@libs/icons';
import { useResponsive } from 'hooks';
import Image from 'next/image';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const MainFooter: FC = () => {
    const { isMobile } = useResponsive();
    return (
        <FooterWrapper>
            <Container>
                {!isMobile ? (
                    <div className='d-flex align-items-center justify-content-between'>
                        <div>
                            <Image src='/images/white-logo.png' width={134} height={42} alt='logo' />

                            <Image className='ms-3' src='/images/footer-image.png' width={37} height={21} alt='logo' />
                        </div>

                        <div>
                            <Icon className='mx-2' path={facebookCircleFill} fill='rgba(255,255,255,1)' />
                            <Icon className='mx-2' path={instagramFill} fill='rgba(255,255,255,1)' />
                            <Icon className='mx-2' path={linkedinFill} fill='rgba(255,255,255,1)' />
                            <Icon className='mx-2' path={twitter} fill='rgba(255,255,255,1)' />
                        </div>
                        <div className='d-flex align-items-center text-white'>
                            <div className='me-3'>
                                <small>
                                    {' '}
                                    <Icon className='me-1' width={19} path={phoneDialPad} fill='rgba(255,255,255,1)' />
                                    020 7377 5055
                                </small>
                            </div>
                            <div>
                                <small>
                                    {' '}
                                    <Icon width={19} className='me-1' path={mapPinFull} fill='rgba(255,255,255,1)' />
                                    Unit 14 -16, 1-13 Adler St, London E1 1EG
                                </small>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Image src='/images/white-logo.png' width={134} height={42} alt='logo' />

                            <Image className='ms-3' src='/images/footer-image.png' width={37} height={21} alt='logo' />
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-2'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Icon className='mx-1' path={facebookCircleFill} fill='rgba(255,255,255,1)' />
                                <Icon className='mx-1' path={instagramFill} fill='rgba(255,255,255,1)' />
                                <Icon className='mx-1' path={linkedinFill} fill='rgba(255,255,255,1)' />
                                <Icon className='mx-1' path={twitter} fill='rgba(255,255,255,1)' />
                            </div>
                            <div>
                                <small style={{ color: 'white' }}>
                                    {' '}
                                    <Icon className='me-1' width={19} path={phoneDialPad} fill='rgba(255,255,255,1)' />
                                    020 7377 5055
                                </small>
                            </div>
                        </div>
                        <small className='mt-2 text-white d-flex align-items-center justify-content-center'>
                            {' '}
                            <Icon width={19} className='me-1' path={mapPinFull} fill='rgba(255,255,255,1)' />
                            Unit 14 -16, 1-13 Adler St, London E1 1EG
                        </small>
                    </>
                )}
            </Container>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.div`
    background-color: #0e0e0e;
    padding: 0.625rem 2rem;
`;
