import { useState, useEffect } from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        setIsOnline(true); 
    }

    const handleOffline = () => {
        setIsOnline(false);
    }

    // need to set the event listener only once that's why we are using useeffect, instead of directly attaching listners.
    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline",handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    return isOnline;
}

export default useOnline;