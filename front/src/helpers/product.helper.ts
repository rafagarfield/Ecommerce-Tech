
import { IProduct } from "@/types";

const apiUrl= process.env.NEXT_PUBLIC_API_URL
const URL =`${apiUrl}/products`

export async function getProducts() {
    try {
     
    const res= await fetch(URL,
        {method: "GET",
        next:{revalidate:3600}
        }
        
    )
    const data: IProduct[] = await res.json();
    return data;
    } catch (error:any) {
        throw new Error(error)
    }

  }


  export async function getProductId(id:string) {
        try {
            const products = await getProducts()
            const product = products.find((product) => product.id.toString() === id)
            if(!product) throw new Error("Product not found")
            return product
        } catch (error:any) {
            console.log(error)
        }

  }
