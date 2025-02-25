import { FC, Fragment, useState } from 'react';

import { galleryArray, HeaderItemProps } from './constants';

import Icon, { arrowRightS } from '@libs/icons';
import { getDescriptionFontSize, getSubtitleFontSize } from '@utils/index';
import { useWindowSize } from 'hooks';
import { ImageWrapper, Wrapper } from './styles';

type PropsType = {
    handleClaimClick: () => void;
    handleItemClick: (item: HeaderItemProps) => void;
};

export const RegularServiceGrid: FC<PropsType> = ({ handleClaimClick, handleItemClick }) => {
    const { width } = useWindowSize();

    const descriptionFontSize = getDescriptionFontSize(width);

    const subtitleFontSize = getSubtitleFontSize(width);

    const [bgImage, setBgImage] = useState<any>(null);
    const [isHoveredIndex, setIsHoveredIndex] = useState<any>(null);

    const [isHoveredOnImage, setIsHoveredOnImage] = useState<boolean>(true);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleHoverOnImage = (item: HeaderItemProps, index: number) => {
        if (!item.image) {
            setIsHoveredOnImage(false);
        }
        setIsHoveredIndex(index);

        setBgImage(item?.bgImage);
    };

    return (
        <Fragment>
            <Wrapper width={width} hoverimage={bgImage} className='wrapper'>
                {galleryArray.map((item, idx) => (
                    <ImageWrapper
                        onMouseLeave={() => {
                            setIsHoveredIndex(null);
                            setBgImage(null);
                            setIsHoveredOnImage(true);
                        }}
                        className={`${item.className} item-${idx} ${
                            isHoveredIndex === idx && item.className !== 'image-view' ? 'active' : 'inactive'
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
                        <div>
                            {!item?.image && isHoveredOnImage && (
                                <p
                                    style={{ fontSize: '1rem', margin: 0, fontWeight: 600 }}
                                    className='d-flex flex-column align-items-start'
                                >
                                    <Icon path={arrowRightS} /> {item.title}
                                </p>
                            )}
                        </div>

                        {item?.bgImage ? (
                            <div className='hover-item'>
                                <div className=' p-2 d-flex  flex-column justify-content-between text-start h-100  align-items-start'>
                                    <h4 style={{ fontSize: subtitleFontSize }}>{item?.bgImage && item.title}</h4>
                                    <button
                                        style={{ fontSize: '0.75rem' }}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                            handleClaimClick();
                                        }}
                                    >
                                        {width <= 1200 ? 'Start Claim' : `Start Your Claim`}
                                    </button>
                                </div>
                            </div>
                        ) : null}
                    </ImageWrapper>
                ))}
            </Wrapper>
        </Fragment>
    );
};
