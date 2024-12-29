import Image from 'next/image';
import { FC, useState } from 'react';
import styled from 'styled-components';

const NewHeader: FC = () => {
    const [hoveredImage, setHoveredImage] = useState<any>(null);
    return (
        <GridContainer>
            {hoveredImage !== null && (
                <BigImageContainer>
                    <BigImage src={`/images/image${hoveredImage + 1}.jpg`} />
                </BigImageContainer>
            )}

            {[...Array(13)].map((_, index) => (
                <GridItem key={index} isHovered={hoveredImage === index} onMouseEnter={() => setHoveredImage(index)}>
                    <Image src={`/images/image-1.png`} alt={`Image ${index + 1}`} width={300} height={200} />
                </GridItem>
            ))}
        </GridContainer>
    );
};
// test
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 20px;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        /* border: 1px solid #ccc; */
    }

    &::after {
        transform: translate(20px, 20px);
    }
`;

const GridItem = styled.div<{ isHovered: boolean }>`
    position: relative;

    &::before {
        content: '';
        display: block;
        padding-bottom: 100%;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
        opacity: ${({ isHovered }) => (isHovered ? '1' : '0')};
        z-index: ${({ isHovered }) => (isHovered ? '-1' : '0')};
    }
`;

const BigImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const BigImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    opacity: 1;
`;

export default NewHeader;
