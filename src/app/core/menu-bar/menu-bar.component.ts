import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LoginResponse } from 'src/app/shared/interfaces/loginResponse.interface';
import { AdminService } from 'src/app/shared/services/adminService';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  items: MenuItem[] | undefined;
  
  constructor(private adminService: AdminService) {

  }

  ngOnInit() {

    const loginRequest = { email: 'admin@gmail.com', password: 'admin' };
    this.adminService.login(loginRequest).subscribe({
      next: (respone: LoginResponse) => {
        console.log(respone);
      }
    })

      this.items = [
          {
              label: 'Seem Dashboard',
           
          },

      ];
  }
}
