import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';

@NgModule({
  declarations: [AdminComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent],
  imports: [CommonModule, AdminRoutingModule]
})
export class AdminModule {}
