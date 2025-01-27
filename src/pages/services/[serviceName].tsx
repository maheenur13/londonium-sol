import ServiceDetails from '@components/serviceDetails';
import { useRouter } from 'next/router';
import { FC } from 'react';

const ServiceDetailsPage: FC = () => {
    const router = useRouter();

    return (
        <div>
            {router?.query?.serviceName && <ServiceDetails serviceName={router.query.serviceName as string} />}
        </div>
    );
};

export default ServiceDetailsPage;

