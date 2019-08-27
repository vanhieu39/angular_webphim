import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "@DataService/data.service";

@Component({
  selector: "app-phong-ve",
  templateUrl: "./phong-ve.component.html",
  styleUrls: ["./phong-ve.component.scss"]
})
export class PhongVeComponent implements OnInit {
  MaLichChieu: string;
  DanhSachGheNgoi: any[] = [];
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.chiTietPhongVe();
  }
  chiTietPhongVe() {
    this.activeRoute.params.subscribe(
      kq => {
        this.MaLichChieu = kq.malichchieu;
        const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.MaLichChieu}`;
        this.dataService.get(uri).subscribe((data: any) => {
          this.DanhSachGheNgoi = data.DanhSachGhe;
          console.log("ghe trang phong ve:", this.DanhSachGheNgoi);
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
