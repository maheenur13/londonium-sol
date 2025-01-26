import { galleryArray } from '@components/MainHeader/constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const ServiceDetails: FC = () => {
    const router = useRouter();

    const serviceDetails = galleryArray.find((itm) => itm.slug === (router?.query?.serviceName as string));

    return (
        <div>
            <ContentWrapper>
                <ImageWrapper>
                    <CenterItemsWrapper>
                        <Title>{serviceDetails?.title}</Title>
                        <Button size='lg'>Start Claim Now</Button>
                    </CenterItemsWrapper>

                    <div>
                        {serviceDetails?.bgImage && (
                            <Image
                                src={serviceDetails?.bgImage}
                                fill
                                style={{
                                    objectFit: 'cover',
                                }}
                                alt='bg-image'
                            />
                        )}
                    </div>
                </ImageWrapper>
            </ContentWrapper>
            <ServiceContainer>
                <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '100%' }}
                    className='mb-2'
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '100%' }}
                    className='mb-2'
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '100%' }}
                    className='mb-2'
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '100%' }}
                    className='mb-2'
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card
                    bg={'light'}
                    text={'dark'}
                    style={{ width: '100%' }}
                    className='mb-2'
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title </Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of the card content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ServiceContainer>
        </div>
    );
};

export default ServiceDetails;

const Title = styled.h3`
    color: white;
    text-align: center;
    font-size: 4rem;
`;

const ContentWrapper = styled.div`
    width: 100%;
    position: relative;
    height: calc(100vh - 10rem);

    img {
        height: 100%;
        width: 100%;
        z-index: -1;
    }
`;

const ImageWrapper = styled.div`
    height: 100%;
    padding: 10px;
    background-color: #05091779;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CenterItemsWrapper = styled.div`
    text-align: center;
    button {
        /* border-radius: 0.125rem; */
        padding: 1rem 3rem;
        border-radius: 20rem;
        margin-top: 2rem;
        font-weight: 600;
    }
    /* margin: auto; */
    /* align-self: center; */
`;

const ServiceContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    gap: 1rem;
    padding: 2rem 12rem;

    @media (max-width: 1200px) {
        padding: 2rem 5rem;
        gap: 0.75rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 0.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.5rem;
        gap: 0.25rem;
    }
`;
