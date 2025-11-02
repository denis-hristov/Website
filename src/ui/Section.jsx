import React from "react";


export default function Section({ id, className = "", children }) {
    return (
        <section
            id={id}
            className={`relative w-full min-h-screen px-6 md:px-10 lg:px-16 py-24 [overflow-x:clip] ${className}`}
        >
            {children}
        </section>
    );
}