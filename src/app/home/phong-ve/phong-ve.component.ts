import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "@DataService/data.service";

@Component({
  selector: "app-phong-ve",
  templateUrl: "./phong-ve.component.html",
  styleUrls: ["./phong-ve.component.scss"]
})
export class PhongVeComponent implements OnInit {
  MaLichChieu: number;
  DanhSachGheNgoi: any[] = [];
  DanhSachGheDat: any[] = [];
  TaiKhoanNguoiDung: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.chiTietPhongVe();
  //  this.danhSachGheDangDat(this.DanhSachGheDat);
  }
  layThongTinNguoiDung() {    

    let taiKhoanHienTai = JSON.parse(localStorage.getItem("userLogin"));
    if (taiKhoanHienTai != null) {
      this.TaiKhoanNguoiDung =  taiKhoanHienTai.TaiKhoan;
    } else {
      alert("Vui lòng đăng nhập để đặt ghế");
      this.router.navigate(["./home/dang-nhap/"]);
    }
    console.log(taiKhoanHienTai.TaiKhoan);


     const objVe:{MaLichChieu:number;TaiKhoanNguoiDung:string;DanhSachVe:any[]}={
      MaLichChieu:this.MaLichChieu,
      TaiKhoanNguoiDung:this.TaiKhoanNguoiDung,
      DanhSachVe:this.DanhSachGheDat
    }
    console.log("obj dat ghe: ",objVe);

    const uri = "QuanLyDatVe/DatVe";
    this.dataService.post(uri,objVe).subscribe((data:any)=>{
      if(data=== "Đặt vé thành công!"){
        alert("Đặt vé thành công!");
       this.router.navigate(["/"]);
      }
    })
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
  danhSachGheDangDat(thamso) {
    this.DanhSachGheDat = thamso;
    console.log("output: ", this.DanhSachGheDat);
  }
}
