import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { NgForm } from "@angular/forms";
import { DataService } from "@DataService/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dang-ky",
  templateUrl: "./dang-ky.component.html",
  styleUrls: ["./dang-ky.component.scss"]
})
export class DangKyComponent implements OnInit {
  @ViewChild("registerForm", { static: false }) registerForm: NgForm;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  @HostListener("window:beforeunload", ["$event"])
  canDeactivate() {
    return this.registerForm.submitted || !this.registerForm.dirty;
  }

  dangKy(registerForm) {
    const objUser = {
      TaiKhoan: registerForm.taiKhoan,
      MatKhau: registerForm.matKhau,
      Email: registerForm.email,
      SoDT: registerForm.soDT,
      MaNhom: "GP09",
      MaLoaiNguoiDung: "KhachHang"
    };
    console.log(objUser);

    const uri = "QuanLyNguoiDung/ThemNguoiDung";
    this.dataService.post(uri, objUser).subscribe((data: any) => {
      if (data === "Tài khoản đã tồn tại") {
        alert(data);
      } else {
        alert("Đăng ký thành công");
        this.router.navigate(["/"]);
      }
    });
  }
}
