import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DataService } from "@DataService/data.service";
@Component({
  selector: "app-danh-sach-phim",
  templateUrl: "./danh-sach-phim.component.html",
  styleUrls: ["./danh-sach-phim.component.scss"]
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim: any = [];

  constructor(
    private quanLyPhim: QuanLyPhimService,
    private dataService: DataService
  ) {}

  @ViewChild("carousel", { static: false }) el: ElementRef;
  ngOnInit() {
    console.log("onInit called");
    this.layDanhSachPhim();
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-chevron-left"></i>',
      '<i class="fa-chevron-right></i>"'
    ],
    responsive: {
      0: {
        items: 1
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

  layDanhSachPhim() {
    // this.quanLyPhim.getListMovie().subscribe((data: any) => {
    //   this.danhSachPhim = data;
    //   console.log(data);
    // });

    const uri = `QuanLyPhim/LayDanhSachPhim?MaNhom=GP09`;
    this.dataService.get(uri).subscribe((data: any) => {
      this.danhSachPhim = data;
    });
  }
}
