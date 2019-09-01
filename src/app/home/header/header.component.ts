import { Component, OnInit, AfterViewInit, OnChanges } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnChanges {
  statusLogin: boolean = false;
  userLogin: any;
  constructor() {}

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (this.userLogin.TaiKhoan) {
      this.userLogin = this.userLogin.TaiKhoan;
      this.statusLogin = true;
    }
  }
  ngOnChanges() {}
  logOut() {
    console.log("log out");
    if (this.userLogin) {
      localStorage.removeItem("userLogin");
      this.statusLogin = false;
    }
  }
}
