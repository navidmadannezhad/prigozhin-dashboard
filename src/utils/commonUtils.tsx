export const generateUrlParams = (params: any): string => {
    return Object.keys(params).filter(k => params[k])
    .map(k => `${k}=${encodeURIComponent(params[k])}`)
    .join('&');
}

export const blobFrom = (image: File): string | null => {
    if(image){
        const blob = new Blob([image])
        const url = URL.createObjectURL(blob, { type: "image/png" });
        console.log(url)
    }
    return null;
}

export const toFormData = (options: any): FormData => {
    const formData = new FormData();
    Object.keys(options).forEach(key => {
        formData.append(key, options[key])
    })
    return formData;
}

export const getModifiedValues = (values: any, initialValues: any) => {
    let modifiedValues: any = {};
    Object.keys(values).forEach(key => {
        if(values[key] !== initialValues[key]){
            modifiedValues[key] = values[key];
        }
    })
    return modifiedValues;
}

export const enToFaNum = (s: number | string): string => String(s).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);