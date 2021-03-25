export const request = async (url, method, body) => {
    let options = {
        method
    };

    if (body) {
        Object.assign(options, {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(body)
        })
    }

    
    let response = await fetch(url, options); 

    let data = await response.json();

    return data;
}