
import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialApps, generateMetrics, generateTrace } from './mockData';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [apps, setApps] = useState(initialApps);
    const [selectedApp, setSelectedApp] = useState(null);
    const [metrics, setMetrics] = useState([]);
    const [traces, setTraces] = useState([]);

    // Load initial data
    useEffect(() => {
        if (apps.length > 0) {
            setSelectedApp(apps[0]);
        }
    }, []);

    // Update metrics and traces when app changes or periodically
    useEffect(() => {
        if (!selectedApp) return;

        // Initial load for the selected app
        setMetrics(generateMetrics(selectedApp.id));

        // Generate some initial traces
        const initialTraces = Array.from({ length: 15 }).map(() =>
            generateTrace(selectedApp.id, selectedApp.name)
        ).sort((a, b) => new Date(b.startTime) - new Date(a.startTime));
        setTraces(initialTraces);

        // Simulate real-time updates
        const interval = setInterval(() => {
            setMetrics(current => {
                const newPoint = generateMetrics(selectedApp.id)[19]; // Get one new point
                return [...current.slice(1), newPoint];
            });

            // Occasionally add a new trace
            if (Math.random() > 0.7) {
                setTraces(current => [generateTrace(selectedApp.id, selectedApp.name), ...current.slice(0, 49)]);
            }
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval);
    }, [selectedApp]);

    const addApp = (newApp) => {
        setApps([...apps, newApp]);
        setSelectedApp(newApp);
    };

    return (
        <StoreContext.Provider value={{
            apps,
            selectedApp,
            setSelectedApp,
            addApp,
            metrics,
            traces
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
