import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { useWindowSize } from 'hooks';
import { Pagination } from 'swiper/modules';
import { HeaderItemProps, mobileGallery } from './constants';
import { ImageWrapper, Wrapper } from './styles';

type PropsType = {
    handleClaimClick: () => void;
    handleItemClick: (item: HeaderItemProps) => void;
};

const MobileServiceGrid: FC<PropsType> = ({ handleClaimClick, handleItemClick }) => {
    const { width } = useWindowSize();

    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
                {Object.entries(mobileGallery).map((slideItems, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                        <Wrapper width={width} className='wrapper  mx-2'>
                            {slideItems[1].map((item, itemIndex) => (
                                <ImageWrapper
                                    onClick={() => handleItemClick(item)}
                                    gridColumn={item.gridColumn}
                                    gridRow={item.gridRow}
                                    backImage={item?.image}
                                    bgColor={'#edf0f2'}
                                    key={itemIndex}
                                    position={item.position}
                                >
                                    <div
                                        style={{
                                            border: '1px solid #e7e7e7',
                                            height: '100%',
                                            width: '100%',
                                            borderRadius: '.25rem',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <div className=' ms-2  text-start h-100  '>
                                            <h4 style={{ fontSize: '12px' }}>{item?.bgImage && item.title}</h4>
                                            {/* <div className='text-center'>
                                                <button
                                                    style={{
                                                        fontSize: '.625rem',
                                                        color: 'blue',
                                                        textDecoration: 'underline',
                                                        border: 'none',
                                                        backgroundColor: 'transparent',
                                                        padding: '0',
                                                        zIndex: item?.bgImage && 99,
                                                    }}
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        handleClaimClick();
                                                    }}
                                                >
                                                    {width <= 1200 ? 'Start Claim' : `Start Your Claim`}
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </ImageWrapper>
                            ))}
                        </Wrapper>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default MobileServiceGrid;
