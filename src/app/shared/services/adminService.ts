import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../interfaces/user.interface";
import { environment } from "src/environments/environment";
import { LoginRequest } from "../interfaces/loginRequest.interface";
import { LoginResponse } from "../interfaces/loginResponse.interface";
import { ManageUserRequest } from "../interfaces/manageUserRequest.interface";



@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private pathService = 'http://localhost:8080/api/auth/admin';

    constructor(private httpClient: HttpClient) { }

    public all(): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.pathService}/users`);
    }

    public updateUserBlockStatus(manageUserRequest: ManageUserRequest): Observable<any> {
        return this.httpClient.patch<any>(`${this.pathService}/manage-user-status`, manageUserRequest);
    }

    public login(loginRequest: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>(`${this.pathService}/login`, loginRequest);
    }
}   