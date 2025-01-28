import ServiceForm from '@components/Includes/ServiceForm';
import { getDescriptionFontSize, getRowSize, getSubtitleFontSize } from '@utils/index';
import { useWindowSize } from 'hooks';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import { galleryArray, HeaderItemProps } from './constants';

export const MainHeader: FC = () => {
    const { width } = useWindowSize();

    const route = useRouter();

    const descriptionFontSize = getDescriptionFontSize(width);

    const subtitleFontSize = getSubtitleFontSize(width);

    const [bgImage, setBgImage] = useState<any>(null);
    const [isHoveredIndex, setIsHoveredIndex] = useState<any>(null);

    const [isHoveredOnImage, setIsHoveredOnImage] = useState<boolean>(true)

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    const handleClaimClick = () => {
        setIsModalOpen(true);
    };



    const handleHoverOnImage = (item: HeaderItemProps, index: number) => {

        if (!item.image) {
            setIsHoveredOnImage(false)
        }
        setIsHoveredIndex(index);

        setBgImage(item?.bgImage);

    };

    const handleItemClick = (item: HeaderItemProps) => {
        if (item.bgImage) {
            route.push(`/services/${item.slug}`);
        }
    };

    return (
        <div>
            <Wrapper width={width} hoverimage={bgImage} className='wrapper  mx-4'>
                {galleryArray.map((item, idx) => (
                    <ImageWrapper
                        onMouseLeave={() => {
                            setIsHoveredIndex(null);
                            setBgImage(null);
                            setIsHoveredOnImage(true)
                        }}
                        className={`${item.className} item-${idx} ${isHoveredIndex === idx && item.className !== 'image-view' ? 'active' : 'inactive'
                            }`}
                        onMouseEnter={() => handleHoverOnImage(item, idx)}
                        backImage={item?.image}
                        gridColumn={item.gridColumn}
                        gridRow={item.gridRow}
                        bgColor={'#edf0f2'}
                        key={idx}
                        position={item.position}
                        hoverimage={bgImage}
                        onClick={() => handleItemClick(item)}
                    >
                        <p style={{ fontSize: descriptionFontSize, margin: 0 }}>
                            {!item?.image && isHoveredOnImage && item.title}
                        </p>

                        {item?.bgImage ? (
                            <div className='hover-item'>
                                <div className=' p-2 d-flex  flex-column justify-content-between text-start h-100  align-items-start'>
                                    <h4 style={{ fontSize: subtitleFontSize }}>{item?.bgImage && item.title}</h4>
                                    <button
                                        style={{ fontSize: descriptionFontSize }}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleClaimClick();
                                        }}
                                    >
                                        {width <= 1200 ? 'Start Claim' : `Start Your Claim`}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </ImageWrapper>
                ))}
            </Wrapper>
            <Modal show={isModalOpen} size='lg' onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Start your claim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ServiceForm />
                </Modal.Body>
            </Modal>
        </div>
    );
};

type WrapperType = {
    backImage?: string;
} & Pick<HeaderItemProps, 'hoverimage' | 'gridColumn' | 'gridRow' | 'bgColor' | 'position'>;

const ImageWrapper = styled.div<WrapperType>`
    position: relative;
    border: 4px solid white;
    cursor: pointer;
    grid-column: ${(props) => props.gridColumn};
    grid-row: ${(props) => props.gridRow};

    &:before {
        transition: 0.6s;
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: url(${({ backImage }) => backImage}) !important;
        background-position: ${({ position }) => position};
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hover-item {
        opacity: 0;
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        & button {
            background-color: transparent;
            border: none;
            outline: none;
        }
    }

    &:hover {
        .hover-item {
            opacity: 1;
        }
    }
`;

const Wrapper = styled.div<{ hoverimage: string; width: number }>`
    position: relative;
    display: grid;
    grid-template-columns: repeat(10, 1fr) auto;
    grid-auto-rows: ${({ width }) => getRowSize(width)};
    transition: 0.5s;
    background-image: url(${({ hoverimage }) => (hoverimage ? hoverimage : 'white')});
    transition: background-image 0.3s;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    div {
        display: flex;
        justify-content: flex-start;
        align-items: end;
    }

    .active {
        .hover-item {
            transition: 0.5s;
            position: relative;
            width: 100%;
            z-index: 99;
            background-color: transparent;
            &:hover {
                :before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background-color: #ffffffa8;
                    z-index: -1;
                }
            }
        }
    }

    .inactive {
        transition: 0.5s;
        padding: 0.625rem;
        &:before {
            transition: 0.5s;
            background-image: ${({ hoverimage }) => hoverimage && 'none'}!important;
        }

        background-color: ${({ hoverimage }) => (hoverimage ? 'transparent' : 'rgba(225, 225, 225, 0.721)')}!important;
        transition: opacity 0.3s;
    }

    .image-view {
        transition: 0.5s;
        overflow: hidden;

        &:hover {
            &:before {
                transform: scale(1.1);
            }
            /* transform: scale(1.1);  */
            /* background-size: 120%; */
            /* background-size: 120%; */
            // Scale the element to 110% of its original size
        }
    }
`;
