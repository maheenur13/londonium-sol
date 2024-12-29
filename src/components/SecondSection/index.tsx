import Icon, { arrowAngelRight } from '@libs/icons';
import { FC } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const items = [
    {
        title: 'Latest News',
        subtitle: 'FIRM COMMENDED BY NATIONAL LEGAL DIRECTORIES',
        text: 'We have once again achieved high rankings across a wide range of practice areas in the latest editions of The Legal 500 and Chambers UK directories, alongside recognition in The Times Best Law Firms list 2025.',
        bgImage: "/images/news-1.jpg"
    },
    // Add more items as needed
    {
        title: 'Insight',
        subtitle: 'LESSONS FROM THE CAPTAIN TOM FOUNDATION REPORT',
        text: 'A report from the Charity Commission that details the unravelling of the Captain Tom Foundation, and repeated instances of mismanagement in its administration, offers a case study in how not to run a charity.',
        bgImage: "/images/news-2.jpg"
    },
    {
        title: 'Insight',
        subtitle: 'BUDGET 2024: CHANGES FOR INDIVIDUALS AND TRUSTS',
        text: 'Experts from our private client team have summarised the key changes from Labour’s Budget which affect both individuals and trusts, particularly regarding capital gains tax, inheritance tax, and the regime.',
        bgImage: "/images/news-3.jpg"
    },
    {
        title: 'Insight',
        subtitle: 'COVID-19 VACCINE INFO',
        text: 'Information regarding COVID-19 vaccine updates.',
        bgImage: "/images/news-4.jpg"
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
                                <Card.Title style={{ fontWeight: 500, fontSize: '20px' }}>{item.title}</Card.Title>
                                <Card.Title style={{ fontWeight: 500, fontSize: '16px' }}>
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
    min-height: 280px;
    max-height: 280px;
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
        filter: blur(4px);
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
