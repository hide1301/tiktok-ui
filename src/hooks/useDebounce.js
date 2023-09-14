import { useState, useEffect } from 'react'

function useDebounce(value, delay) {
    const [debounceValued, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay)

        return () => {
            clearTimeout(handler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debounceValued
}

export default useDebounce
