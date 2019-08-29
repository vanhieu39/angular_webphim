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
  layThongTinNguoiDung() {
    console.log("đặt ghế");
    let taiKhoanHienTai = JSON.parse(localStorage.getItem("userLogin"));
    if (taiKhoanHienTai != null) {
      taiKhoanHienTai.TaiKhoan;
    } else {
      alert("Vui lòng đăng nhập để đặt ghế");
      this.router.navigate(["./home/dang-nhap/"]);
    }
    console.log(taiKhoanHienTai.TaiKhoan);
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
