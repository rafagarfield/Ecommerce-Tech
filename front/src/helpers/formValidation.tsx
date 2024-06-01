import { LoginErrorProps, LoginProps, RegisterErrorProps, RegisterProps } from "@/types";

export function validateLoginForm (values:LoginProps):LoginErrorProps {

    const emailRegex=  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let errors:LoginErrorProps={}
    if(!values.email){
        errors.email="El correo es requerido"
    }
    else if(!emailRegex.test(values.email)){
        errors.email="El correo no es válido"
    }
    
    else if(!values.password){
        errors.password="La contraseña es requerida"
    }
    return errors;
}


export function validateRegisterForm(values: RegisterProps): RegisterErrorProps {
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Al menos 8 caracteres, una letra y un número
    const NAME_REGEX = /^[a-zA-Z\s]{1,50}$/; // Solo letras y espacios, entre 1 y 50 caracteres
    const ADDRESS_REGEX = /^[a-zA-Z0-9\s,'-]{5,100}$/; // Letras, números, espacios, comas, guiones, entre 5 y 100 caracteres
    const PHONE_REGEX = /^\+?[1-9]\d{1,14}$/; // Formato E.164, entre 2 y 15 dígitos

    let errors: RegisterErrorProps = {};

    if (!values.email) {
        errors.email = "El correo es requerido";
    } else if (!EMAIL_REGEX.test(values.email)) {
        errors.email = "El correo no es válido";
    }

    // if (!values.password) {
    //     errors.password = "La contraseña es requerida";
    // } else if (!PASSWORD_REGEX.test(values.password)) {
    //     errors.password = "La contraseña debe tener al menos 8 caracteres, una letra y un número";
    // }

    if (!values.name) {
        errors.name = "El nombre es requerido";
    } else if (!NAME_REGEX.test(values.name)) {
        errors.name = "El nombre solo puede contener letras y espacios, entre 1 y 50 caracteres";
    }

    // if (!values.address) {
    //     errors.address = "La dirección es requerida";
    // } else if (!ADDRESS_REGEX.test(values.address)) {
    //     errors.address = "La dirección solo puede contener letras, números, espacios, comas y guiones, entre 5 y 100 caracteres";
    // }

    if (!values.phone) {
        errors.phone = "El teléfono es requerido";
    } else if (!PHONE_REGEX.test(values.phone)) {
        errors.phone = "El teléfono no es válido";
    }

    return errors;
}