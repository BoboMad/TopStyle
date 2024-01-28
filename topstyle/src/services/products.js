
export const fetchAllProducts = async () => {

    const url = 'http://localhost:3000/products';

    try{
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.log(error);
    }

}

export const fetchProductById = async (id) => {

    const url = 'http://localhost:3000/products/' + id;

    try{
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.log(error);
    }
    
}