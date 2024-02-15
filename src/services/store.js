import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

// Configura y crea la tienda de Redux
export const store = configureStore({
    // Especifica los reductores para la tienda, en este caso, el reductor de la API de artículos
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    // Configura el middleware, incluyendo el middleware de la API de artículos
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
});