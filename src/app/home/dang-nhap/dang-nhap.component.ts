import { Component, OnInit } from "@angular/core";
import { DataService } from "@DataService/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dang-nhap",
  templateUrl: "./dang-nhap.component.html",
  styleUrls: ["./dang-nhap.component.scss"]
})
export class DangNhapComponent implements OnInit {
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  dangNhap(loginForm) {
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${
      loginForm.taiKhoan
    }&MatKhau=${loginForm.matKhau}`;

    this.dataService.post(uri).subscribe((data: any) => {
      console.log(data);
      if (data === "Tài khoản hoặc mất khẩu không đúng!") {
        alert(data);
      } else {
        alert("Đăng nhập thành công");
        localStorage.setItem("userLogin", JSON.stringify(data));
        this.router.navigate(["/"]);
      }
    });
  }
}
