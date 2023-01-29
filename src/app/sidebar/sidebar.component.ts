import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None //!!! CSS thing !!!
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  panelOpenState = false;
}


