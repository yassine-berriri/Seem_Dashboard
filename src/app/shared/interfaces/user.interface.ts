export interface User {
    id?: number;
    name: string;
    email: string;
    age: string;
    phoneNumber: string;
    country: string;
    city: string;
    bio: string;
    interests: string[];
    emailValid: boolean;
    phoneNumberValid: boolean;
    isBlocked: string;
    gender: string;
}