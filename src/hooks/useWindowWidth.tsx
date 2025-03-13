import { useEffect, useState } from "react";

export const useWindowWidth = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767.98px)');
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    return isMobile;
};
