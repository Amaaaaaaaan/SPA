import { useEffect,useRef,useState } from "react";

export function usePrev(value) {
    const prevRef = useRef();
    useEffect(() => {
        prevRef.current = value;
    }, [value]);
    return prevRef.current;
}

