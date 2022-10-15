import React from 'react'
import useDarkMode from 'use-dark-mode';

export default function ThemeToggler() {
    const darkMode = useDarkMode()

    return (
        <div>
            <button onClick={() => darkMode.toggle()}>change</button>
        </div>
    )
}