import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { activeToggleConstants } from '../service/shared-global-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activePageToggle = activeToggleConstants;
  public showMoreLink: boolean = false;
  setting = false;
  transactions = false;
  dashboard = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  toggleMoreLinkSideBar(event, path) {
    console.log("event",event,path)
    event.stopPropagation();
    document.querySelector("body").classList.remove("overflow-hidden");
    switch(path) {
      case 'dashboard': this.dashboard = true;
      this.transactions = false;
      this.setting = false;
      this.router.navigate(['dashboard']);
      break;
      case 'setting': this.setting = true;
      this.transactions = false;
      this.dashboard = false;
      this.router.navigate(['setting']);
      break;
      case 'transactions': this.transactions = true;
      this.setting = false;
      this.dashboard = false
      break;

    } 
  }


  setWindowScrollToTop() {
    window.scrollTo(0, 0)
  }


}
