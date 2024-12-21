import React, { ReactElement } from 'react';
import './TextReveal.css';

export const TextReveal = ({ text }: { text: ReactElement }) => (
    <div className="text-container">
        <div className="text">
            <span>
                {text}
            </span>
        </div>
    </div>
);
