import AOS from 'aos';
import 'aos/dist/aos.css';
import { FC, Fragment, ReactNode, useEffect } from 'react';

type PropsType = {
    children: ReactNode;
};

export const AOSProvider: FC<PropsType> = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return <Fragment>{children}</Fragment>;
};
