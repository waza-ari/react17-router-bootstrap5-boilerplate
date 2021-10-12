import React, { useState, useCallback } from 'react';

export const ErrorContext = React.createContext({
    error: null,
    addError: () => {},
    removeError: () => {}
});

export default function ErrorProvider({ children }) {
    const [error, setError] = useState(null);

    const removeError = () => setError(null);

    const addError = (severity, message) => setError({ severity, message });

    const contextValue = {
        error,
        addError: useCallback((severity, message) => addError(severity, message), []),
        removeError: useCallback(() => removeError(), [])
    };

    return (
        <ErrorContext.Provider value={contextValue}>
            {children}
        </ErrorContext.Provider>
    );
}