import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {

    $(document).ready(function(){

      var height = $(window).height();
      var div = document.getElementById('nv-2');
      var posicionY = div.getBoundingClientRect().top;

      console.log('*_* heig: ', height,  (height - posicionY));
      var alto = 0;
      if (posicionY > (height)) {
        alto = 100;
      } else{
        alto = (height - posicionY);
      }

      $('.nv-2').height(alto);
    });



  }

  ngOnInit(): void {
  }

}
