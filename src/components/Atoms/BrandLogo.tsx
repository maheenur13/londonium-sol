import Image from 'next/image';
import { FC } from 'react';

export const BrandLogo: FC = () => {
    return <Image src='/images/londonium-logo.svg' width={191} height={40} alt='main-logo' />;
};
