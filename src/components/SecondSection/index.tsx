import Icon, { arrowAngelRight } from '@libs/icons';
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const items = [
    {
        title: 'News',
        subtitle: 'New updates on the way',
        text: `Stay informed about current events with the latest news and updates. Our team of experts curates the most relevant and up-to-date information to keep you in the loop.`,
        bgImage: "/images/london-city.jpg"
    },
    {
        title: 'Insight',
        subtitle: 'Deep dive into the topic',
        text: `Gain a deeper understanding of the topic with detailed insights. Our in-depth analysis and comprehensive coverage will provide you with a comprehensive understanding of the subject.`,
        bgImage: "/images/legal-consult.jpg"
    },
    {
        title: 'Analysis',
        subtitle: 'In-depth analysis of the subject',
        text: `Uncover patterns and trends with in-depth analysis of the subject. Our team of experts will provide you with a detailed analysis of the subject, helping you to stay ahead of the curve.`,
        bgImage: "/images/big-ben-tower.jpg"
    },
    {
        title: 'Trends',
        subtitle: 'Current and future trends',
        text: `Stay ahead with knowledge of current and future trends. Our team of experts will keep you updated on the latest trends, helping you to make informed decisions.`,
        bgImage: "/images/justice-shake.jpg"
    }
];

const SecondSection: FC = () => {

    return (
        <div className='m-5'>
            <Row xs={1} md={4} className='g-4'>
                {items.map((item, idx) => (
                    <Col key={idx}>
                        <CardWrapper bgImage={item.bgImage}>
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 500, fontSize: '1.25rem' }}>{item.title}</Card.Title>
                                <Card.Title style={{ fontWeight: 500, fontSize: '1rem' }}>
                                    {item.subtitle}
                                </Card.Title>

                                <Card.Text>
                                    {item.text}
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

const CardWrapper = styled(Card) <{ bgImage: string }>`
    position: relative;
    min-height: 17.5rem;
    max-height: 17.5rem;
    overflow: hidden;
    cursor: pointer;
    background-color:rgba(42, 42, 42, 0.619);

    &::before {
        
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${props => props.bgImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        filter: blur(.25rem);
        z-index: -1;
    }
    transition:0.2s;
    

    color: #FFFFFFFF;

    &:hover {
        /* background-color:rgba(170, 0, 0, 0.48)!important; */
        transition:0.2s;
      
        /* transform: scale(1.05); */
    }
`;