import Image from 'next/image';
import { FC } from 'react';

export const Map: FC = () => {
    return (
        <div className='p-5 text-center'>
            <Image src='/images/map.png' width={350} height={380} alt='Map' />
        </div>
    );
};
