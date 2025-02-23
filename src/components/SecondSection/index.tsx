import Icon, { arrowAngelRight } from '@libs/icons';
import { FC } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const items = [
    {
        title: 'News',
        subtitle: 'New updates on the way',
        text: `Stay informed about current events with the latest news and updates. Our team of experts curates the most relevant and up-to-date information to keep you in the loop.`,
        bgImage: '/images/london-city.jpg',
    },
    {
        title: 'Insight',
        subtitle: 'Deep dive into the topic',
        text: `Gain a deeper understanding of the topic with detailed insights. Our in-depth analysis and comprehensive coverage will provide you with a comprehensive understanding of the subject.`,
        bgImage: '/images/legal-consult.jpg',
    },
    {
        title: 'Analysis',
        subtitle: 'In-depth analysis of the subject',
        text: `Uncover patterns and trends with in-depth analysis of the subject. Our team of experts will provide you with a detailed analysis of the subject, helping you to stay ahead of the curve.`,
        bgImage: '/images/big-ben-tower.jpg',
    },
    {
        title: 'Trends',
        subtitle: 'Current and future trends',
        text: `Stay ahead with knowledge of current and future trends. Our team of experts will keep you updated on the latest trends, helping you to make informed decisions.`,
        bgImage: '/images/justice-shake.jpg',
    },
];

const SecondSection: FC = () => {
    return (
        <div className='my-3 '>
            <GridWrapper>
                {items.map((item, idx) => (
                    <ItemWrapper key={idx}>
                        <CardWrapper bgImage={item.bgImage}>
                            <Card.Body>
                                <TitleWrapper style={{ fontWeight: 500, fontSize: '1.5rem' }}>
                                    {item.title}
                                </TitleWrapper>
                                <TitleWrapper style={{ fontWeight: 500, fontSize: '1.15rem' }}>
                                    {item.subtitle}
                                </TitleWrapper>

                                {/* <StyledCardText>{item.text}</StyledCardText> */}
                            </Card.Body>
                            <Card.Footer style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                                <small>
                                    Register Interest{' '}
                                    <Icon
                                        path={arrowAngelRight}
                                        fill='white'
                                        strokeWidth='0.5'
                                        width={18}
                                        height={18}
                                    />
                                </small>
                            </Card.Footer>
                        </CardWrapper>
                    </ItemWrapper>
                ))}
            </GridWrapper>
        </div>
    );
};

export default SecondSection;

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); // 5 cards for laptops and larger monitors
    gap: 0.5rem; // Adjust the gap between items as needed

    @media (max-width: 1200px) {
        // For medium devices (tablets)
        grid-template-columns: repeat(3, 1fr); // 3 cards
    }

    @media (max-width: 768px) {
        // For small devices (phones)
        grid-template-columns: repeat(2, 1fr); // 2 cards
    }
`;

const ItemWrapper = styled.div`
    // Add any additional styles for the item wrapper here
    // For example, you can set a max-width or padding
    border-radius: 0px;
    overflow: hidden; // Example style
`;

const CardWrapper = styled(Card)<{ bgImage: string }>`
    position: relative;
    min-height: 17.5rem;
    max-height: 17.5rem;
    overflow: hidden;
    cursor: pointer;
    background-color: rgba(19, 19, 19, 0.261);
    border-radius: 0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url(${(props) => props.bgImage});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;

        z-index: -1;
    }
    transition: 0.2s;

    color: #ffffffff;

    &:hover {
        /* background-color:rgba(170, 0, 0, 0.48)!important; */
        transition: 0.2s;

        /* transform: scale(1.05); */
    }
`;

const TitleWrapper = styled(Card.Title)`
    @media (max-width: 1200px) {
        // For medium devices (tablets)
        font-size: 1.15rem; // Adjust title size for tablets
    }

    @media (max-width: 768px) {
        // For small devices (phones)
        font-size: 0.9rem; // Adjust title size for phones
    }
`;

const StyledCardText = styled(Card.Text)`
    font-size: 1rem; // Default font size for larger screens

    @media (max-width: 768px) {
        // For small devices (phones)
        font-size: 0.75rem; // Adjust font size for small devices
        display: -webkit-box; // Use flexbox for multi-line text
        -webkit-box-orient: vertical; // Set the box orientation to vertical
        -webkit-line-clamp: 5; // Limit to 5 lines
        overflow: hidden; // Hide overflow text
        text-overflow: ellipsis; // Show ellipsis for overflow text
    }
`;
