import Icon, { arrowAngelRight } from '@libs/icons';
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const items = [
    {
        title: 'Latest News',
        subtitle: 'Lorem Ipsum is simply dummy text',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
        bgImage: "/images/tower-bridge-view.jpg"
    },
    // Add more items as needed
    {
        title: 'Insight',
        subtitle: 'Lorem Ipsum is simply dummy text',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
        bgImage: "/images/tower-bridge-view.jpg"
    },
    {
        title: 'Insight',
        subtitle: 'Lorem Ipsum is simply dummy text',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.`,
        bgImage: "/images/tower-bridge-view.jpg"
    },
    {
        title: 'Insight',
        subtitle: 'Lorem Ipsum is simply dummy text',
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type`,
        bgImage: "/images/tower-bridge-view.jpg"
    }
];

const SecondSection: FC = () => {

    //
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
    background-color:rgba(114, 114, 114, 0.619);

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