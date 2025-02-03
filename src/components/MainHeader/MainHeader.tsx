import ServiceForm from '@components/Includes/ServiceForm';
import { useResponsive } from 'hooks';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { HeaderItemProps } from './constants';
import MobileServiceGrid from './MobileServiceGrid';
import { RegularServiceGrid } from './RegularServiceGrid';

export const MainHeader: FC = () => {
    const { isMobile } = useResponsive();
    const route = useRouter();

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleSuccess = () => {
        setIsModalOpen(false);
    };

    const handleItemClick = (item: HeaderItemProps) => {
        if (item.bgImage) {
            route.push(`/services/${item.slug}`);
        }
    };

    const handleClaimClick = () => {
        setIsModalOpen(true);
    };

    // const galleryItem = isMobile ? mobileGallery : galleryArray;

    return (
        <div>
            {isMobile ? (
                <MobileServiceGrid handleClaimClick={handleClaimClick} handleItemClick={handleItemClick} />
            ) : (
                <RegularServiceGrid handleClaimClick={handleClaimClick} handleItemClick={handleItemClick} />
            )}

            <Modal show={isModalOpen} size='lg' onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Start your claim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ServiceForm handleSuccess={handleSuccess} />
                </Modal.Body>
            </Modal>
        </div>
    );
};
