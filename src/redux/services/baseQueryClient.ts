import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import HttpStatusCode from '@models/HttpStatusCode';
import { toast } from 'react-hot-toast';

const baseQueryClient = (baseUrl: string) => {
    const baseQuery = fetchBaseQuery({
        baseUrl: baseUrl, 
        prepareHeaders: (headers) => {
            // -- authorization token mechanism here -- //
            return headers
        },
    })
    
    return async (args: any, api: any, extraOptions: any) => {
        let result = await baseQuery(args, api, extraOptions);

        if(result.error){
            // -- error handling mechanism here -- //
            switch(result.error.status){
                case HttpStatusCode.UNAUTHORIZED:
                    toast.error("احرازهویت نشده");
                    break;
                case HttpStatusCode.INTERNAL_SERVER_ERROR:
                    toast.error("مشکل داخلی سرور");
                    break;
                default:
                    toast.error("مشکل ناشناخته");
                    break;
            }
        }
        
        return result
    }   
};

export default baseQueryClient;
