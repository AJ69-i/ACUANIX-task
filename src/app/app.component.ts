import { Component, OnInit } from '@angular/core';
import { ShowLayoutService } from './core/services/show-layout/show-layout.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ACUANIX-task';

  constructor(private ShowLayout: ShowLayoutService , private router: Router) {}

  isLocalStorageNotEmpty(): boolean {
    // Check if the local storage item is not empty
    const storedData = this.ShowLayout.getValue('auth');
    // Check if i have the data of the user stored in local storage and we are currently in login page as the project loads on the browser
    //i will hide the header and never show the user anything untill he logs in and be authenticated
    if(this.router.url === "/login" && storedData) {
      return false;
    }
    return !!storedData; // Returns true if not empty, false otherwise
  }
}
