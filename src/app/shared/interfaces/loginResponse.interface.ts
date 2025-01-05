export interface LoginResponse {
    admin: {
        id: number;
        username: string;
        password: string;
    }
    token: string;
}