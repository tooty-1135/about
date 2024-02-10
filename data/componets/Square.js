"use client"
import { forwardRef, useEffect } from "react";

export const Square = forwardRef((props, ref) => {
    const mode = props.mode || 1
    useEffect(() => {
        const e = ref.current
        function handleResize() {
            if (mode == 1) {
                e.style.setProperty('height', window.clientWidth + "px");
                console.log(e.clientWidth)
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    console.log("owo")

    return (<div {...props.props} ref={ref}>{props.children}</div>);
})