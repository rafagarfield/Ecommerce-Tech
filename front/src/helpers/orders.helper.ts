const apiUrl= process.env.NEXT_PUBLIC_API_URL
const URL =`${apiUrl}/users/orders`
const URLCreate= `${apiUrl}/orders`


export async function createOrder(products:number[], token:string){

    try {
        const res= await fetch(URLCreate,
            {method: "POST",
            headers:{
                Authorization:token,
                "Content-Type":"application/json"
            },
            body:JSON.stringify({products})
            }
            
            
        )
        const order=await res.json();
        return order;
    } catch (error:any) {
        throw new Error(error)
    }
}

export async function getOrders(token:string){
    try {
        const res= await fetch(URL,
            {method: "GET",
            cache:"no-cache",
            headers:{
                Authorization:token,
            }
            }
            
            
        )
        const orders=await res.json();
        return orders;
    } catch (error:any) {
        throw new Error(error)
    }
}