import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { useWindowSize } from './useWindowSize';

interface ResponsiveType {
    isMobile: boolean;
    isDesktop: boolean;
    isLaptop: boolean;
}

export const useResponsive = (): ResponsiveType => {
    const [responsive, setResponsive] = useState<ResponsiveType>({
        isMobile: false,
        isLaptop: false,
        isDesktop: false,
    });
    const { width } = useWindowSize();

    console.log({ width });

    useIsomorphicLayoutEffect(() => {
        if (width > 1024) {
            setResponsive({ isMobile: false, isLaptop: false, isDesktop: true });
        } else if (width > 768 && width <= 1024) {
            setResponsive({ isMobile: false, isLaptop: true, isDesktop: false });
        } else {
            console.log('mamaaaa');

            setResponsive({ isMobile: true, isLaptop: false, isDesktop: false });
        }
    }, [width]);

    return responsive;
};
