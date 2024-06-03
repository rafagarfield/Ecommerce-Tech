import { LoginProps, RegisterProps } from "@/types";

const apiUrl= process.env.NEXT_PUBLIC_API_URL
const registerURL =`${apiUrl}/users/register`

export async function register(userData: RegisterProps) {
    try {
     
    const res= await fetch(registerURL,
        { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
        }
        
    )

    if(res.ok){
        return res.json();
    }
    else {
        alert("falló al registrarse")
        throw new Error ("failed to register")
    }
    
    } catch (error:any) {
        throw new Error(error)
    }

  }

  const LoginURL =`${apiUrl}/users/login`

export async function login(userData: LoginProps) {
    try {
     
    const res= await fetch(LoginURL,
        { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
        }
        
    )

    if(res.ok){
        return res.json();
    }
    else {
        alert("falló al iniciar session")
        throw new Error ("failed to login")
    }
    
    } catch (error:any) {
        throw new Error(error)
    }

  }