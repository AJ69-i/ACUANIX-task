import { ShowLayoutService } from 'src/app/core/services/show-layout/show-layout.service';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var Navigation: any;
import Headroom from 'headroom.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit {

  @ViewChild("header", { static: false }) header!: ElementRef;

  constructor(private router :Router, private ShowLayout: ShowLayoutService) {}

  ngOnInit(): void {
    //initialize the navigation by using NAVX.js library
    var navigation = new Navigation(document.getElementById("navigation"));
  }

  ngAfterViewInit() {
    // Using headroom.js library for handling scroll events on a webpage, particularly for creating sticky headers or hiding/showing elements based on the user's scroll position.
    if (this.header && this.header.nativeElement) {
      const headroom = new Headroom(this.header.nativeElement);
      headroom.init();
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/", { replaceUrl: true });
  }
}
