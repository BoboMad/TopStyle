

export const createOrder = async (user, cart) => {
    const orderData = {
        user:user ? user : null,
        products:  cart.map(item => ({ product: item._id, quantity: item.quantity })),
        totalAmount: 0.00,
    }

    try{
        const response = await fetch('http://localhost:3000/orders',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': user && user.token ? `Bearer ${user.token}` : '',
            },
            body: JSON.stringify(orderData),
        });

        const json = await response.json();
        if(response.ok && json.success){
            return {success: true, order: json.order}
        }
        else{
            return {success: false, order: json.error}
        }
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

export const fetchUserOrders = async (user) => {
    const url = 'http://localhost:3000/orders/user/' + user.userId;

    try{
        const response = await fetch(url);
        const json = await response.json();
        return json;
    }
    catch(error){
        console.log(error);
    }
}