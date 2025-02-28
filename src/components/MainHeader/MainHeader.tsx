import ServiceForm from '@components/Includes/ServiceForm';
import { useResponsive } from 'hooks';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { NavItemsEnums } from '../../constants';
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

    return (
        <div id={NavItemsEnums.HOME}>
            {isMobile ? (
                <MobileServiceGrid handleClaimClick={handleClaimClick} handleItemClick={handleItemClick} />
            ) : (
                <RegularServiceGrid handleClaimClick={handleClaimClick} handleItemClick={handleItemClick} />
            )}

            <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title
                        style={{ flexGrow: 2, fontSize: '2rem', textTransform: 'uppercase', fontWeight: 700 }}
                        className='text-center'
                    >
                        Start <span style={{ color: 'red' }}>your</span> claim
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ServiceForm handleSuccess={handleSuccess} />
                </Modal.Body>
            </Modal>
        </div>
    );
};
