import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function RouteTransition({ children }) {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // animation time
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <div className="relative">
            {isLoading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-white"></div>
                </div>
            )}
            {children}
        </div>
    );
}
