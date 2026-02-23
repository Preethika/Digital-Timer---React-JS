import React from 'react';
import { createRoot } from 'react-dom/client';
import DigitalTimer from './DigitalTimer/DigitalTimer';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DigitalTimer />
    </React.StrictMode>
)
