import Icon, { arrowAngelRight } from '@libs/icons';
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const SecondSection: FC = () => {
    return (
        <div className='m-5'>
            <Row xs={1} md={4} className='g-4'>
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <CardWrapper>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 500, fontSize: '20px' }}>Latest News</Card.Title>
                                <Card.Title style={{ fontWeight: 500, fontSize: '16px' }}>
                                    LAUNCH OF COVID-19 GROUP ACTION
                                </Card.Title>

                                <Card.Text>
                                    Our group actions team is representing a diverse group of businesses that have had
                                    their Covid-19 related business interruption claims declined by insurers. To
                                    register your interest in joining a claim click below.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <small>
                                    Register Interest{' '}
                                    <Icon path={arrowAngelRight} strokeWidth='0.5' width={18} height={18} />
                                </small>
                            </Card.Footer>
                        </CardWrapper>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default SecondSection;

const CardWrapper = styled(Card)`
    background-image: url('/images/card-bg-1.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;
