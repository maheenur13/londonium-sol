import { useState } from 'react';
import useEventListener from './useEventListener';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

interface WindowSize {
    width: number;
    height: number;
}

export function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 0,
        height: 0,
    });

    const handleSize = () => {
        console.log({ window });

        setWindowSize({
            width: window.outerWidth,
            height: window.outerHeight,
        });
    };

    useEventListener('resize', handleSize);

    // Set size at the first client-side load
    useIsomorphicLayoutEffect(() => {
        handleSize();
    }, []);

    return windowSize;
}
