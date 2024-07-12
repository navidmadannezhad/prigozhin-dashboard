import { emptyCommonApi as api } from "./emptyCommonApi";

const injectedRtkApi = api.injectEndpoints({
    endpoints: (build) => ({

        getAllItems: build.query({
            query: (queryArg: any) => ({
                url: `/`,
                method: "GET",
            }),
        }),

    }),
    overrideExisting: false,
});

export { injectedRtkApi as common_api };

export const {
    useLazyGetAllItemsQuery
} = injectedRtkApi;
