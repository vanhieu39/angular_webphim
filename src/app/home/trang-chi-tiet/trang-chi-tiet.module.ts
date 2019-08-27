import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChiTietRoutingModule } from "./trang-chi-tiet-routing.module";
import { ChiTietPhimComponent } from "./chi-tiet-phim/chi-tiet-phim.component";

@NgModule({
  declarations: [ChiTietPhimComponent],
  imports: [CommonModule, TrangChiTietRoutingModule]
})
export class TrangChiTietModule {}
