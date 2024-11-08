import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const fetchData = async () => {
    const response = await fetch('https://api.restful-api.dev/objects');
    if (!response.ok) throw new Error('Error al obtener los datos');
    return response.json();
};

export const WrapperQuery = ({ children }) => {

    const queryClient = new QueryClient();

    return (

        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>

    );
}