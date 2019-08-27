import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PhongVeComponent } from "./phong-ve.component";
import { PhongVeRoutingModule } from "./phong-ve-routing.module";
import { DanhSachGheModule } from "../danh-sach-ghe/danh-sach-ghe.module";

@NgModule({
  declarations: [PhongVeComponent],
  imports: [CommonModule, PhongVeRoutingModule, DanhSachGheModule]
})
export class PhongVeModule {}
