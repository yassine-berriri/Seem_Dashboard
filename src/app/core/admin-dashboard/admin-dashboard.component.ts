import { Component } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user.interface';
import { AdminService } from 'src/app/shared/services/adminService';
import { TableModule } from 'primeng/table';
import { ManageUserRequest } from 'src/app/shared/interfaces/manageUserRequest.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  providers: [MessageService]
})
export class AdminDashboardComponent {
  users!: User[];

  constructor(private adminService: AdminService, private messageService : MessageService) {}

  ngOnInit() {
    this.getUsersList()
  }

  getUsersList(){
    this.adminService.all().subscribe(({
      next: (usersList : User[]) => {
        console.log("userlist", usersList)
        this.users = usersList;
      },
      error: (error) => {
        console.log("error in fetching list of users : ", error)
      }
    }))
  }

  toggleStatus(manageUserBodey : ManageUserRequest){
    this.adminService.updateUserBlockStatus(manageUserBodey).subscribe({
      next: (updatedData) => {
        console.log("updated data: ", updatedData)
        this.messageService.add({
          severity: "success", 
          summary: "Statut modifié", 
          detail: "Statut modifié avec succèss", 
          life:3000
        })
      }, 
      error : (error) => {
        this.messageService.add({ 
          severity: "error", 
          summary: "Erreur de modification", 
          detail: "Erreur lors de modification", 
          life:3000
        });
        console.log("error in updating user status : ", error)
      }
    })
    this.getUsersList()
  }

}
