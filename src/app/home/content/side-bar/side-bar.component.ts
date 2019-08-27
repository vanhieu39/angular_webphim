import { Component, OnInit } from "@angular/core";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: [
      '<i class="fa-chevron-left"></i>',
      '<i class="fa-chevron-right></i>"'
    ],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
}
