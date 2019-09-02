import { Component, OnInit, AfterViewInit, OnChanges } from "@angular/core";
import { QuanLyUserService } from "@DataService/quan-ly-user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  statusLogin: boolean = false;
  userLogin: any;
  subUser: Subscription;
  constructor(private qlUser: QuanLyUserService) {}

  ngOnInit() {
    this.userLogin = JSON.parse(localStorage.getItem("userLogin"));
    if (this.userLogin) {
      this.userLogin = this.userLogin.TaiKhoan;
      this.statusLogin = true;
    }
    this.subUser = this.qlUser.isLogIn.subscribe(next => {
      this.statusLogin = next;
      console.log("use state", next);
    });
  }
  ngOnDestroy(): void {
    this.subUser.unsubscribe();
  }
  logOut() {
    console.log("log out");
    if (this.userLogin) {
      localStorage.removeItem("userLogin");
      this.statusLogin = false;
    }
  }
}
