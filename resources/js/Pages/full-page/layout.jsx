
import React from 'react';
import AppConfig from "@/Layouts/layout/AppConfig.jsx";



export default function SimpleLayout({ children }) {
    return (
        <React.Fragment>
            {children}
            <AppConfig />
        </React.Fragment>
    );
}
