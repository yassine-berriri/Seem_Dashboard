import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  items: MenuItem[] | undefined;
  
  constructor(private router : Router) {

  }

  ngOnInit() {
    this.items = [{label: 'Seem Dashboard',},];
  }

  logout(){
    localStorage.clear()
    this.router.navigate([''])
  }
}
