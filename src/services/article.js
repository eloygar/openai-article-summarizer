import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Obtiene la clave API de las variables de entorno
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Crea una instancia de la API para realizar consultas a la API externa de extracción y resumen de artículos
export const articleApi = createApi({
    // Establece la ruta del reductor para esta API
    reducerPath: 'articleApi',
    // Configura la consulta base con la URL base y las cabeceras requeridas
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        // Prepara las cabeceras con la clave API y el host necesario para la API externa
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    // Define los puntos finales (endpoints) de la API
    endpoints: (builder) => ({
        // Configura una consulta para obtener un resumen de un artículo
        getSummary: builder.query({
            // La función de consulta utiliza la URL con el parámetro 'summarize' y la URL del artículo codificada
            // La función 'encodeURIComponent()' codifica los caracteres especiales presentes en los valores de los parámetros
            // Es crucial codificar correctamente estos caracteres para evitar errores o comportamientos inesperados en el servidor
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

// Exporta el hook generado para realizar la consulta de resumen de artículo de manera diferida (lazy)
export const { useLazyGetSummaryQuery } = articleApi