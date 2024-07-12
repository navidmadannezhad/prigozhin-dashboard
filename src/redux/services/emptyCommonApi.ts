import { createApi } from '@reduxjs/toolkit/query/react';
import baseQueryClient from './baseQueryClient';

export const emptyCommonApi = createApi({
    reducerPath: "common_api",
    baseQuery: baseQueryClient(`${import.meta.env.VITE_SERVER_URL}/my-common-api/`),

    endpoints: () => ({}),
});
