import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuanLyUserService {
  //khởi tạo biến lưu giá trị đăng nhập.
  isLogIn = new BehaviorSubject<boolean>(false);
  constructor() {}
  statusLogIn(val) {
    const checkLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (checkLogin.TaiKhoan) {
      return this.isLogIn.next(true);
    }
    this.isLogIn.next(val);
  }
}
