
const debounce = (fn: () => void, duration = 500) => {
    let timeout: any;
    return () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(fn, duration);
    };
}

export default debounce;