"use client"

import React from 'react';

export default function Loader({options}: { options: string }) {

    return (
        <>
            {/* <svg className={`${options}`} viewBox="0 0 24 24"></svg> */}
            <svg className={`${options}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#ffffff" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="matrix(1,0,0,1,0,0)"></circle>
            </svg>

        </>
    );
};