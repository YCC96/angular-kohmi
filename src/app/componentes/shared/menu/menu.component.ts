import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  scroll: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.scroll = $(window).scrollTop();
    $(window).scroll(() => {
      this.scroll = $(window).scrollTop();
    });
  }

}
