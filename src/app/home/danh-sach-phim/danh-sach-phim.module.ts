import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CarouselModule } from "ngx-owl-carousel-o";
import { DanhSachPhimRoutingModule } from './danh-sach-phim-routing.module';
// Components
import { DanhSachPhimComponent } from "./danh-sach-phim.component";
import { ItemPhimComponent } from "./item-phim/item-phim.component";
@NgModule({
  declarations: [
    DanhSachPhimComponent,
    ItemPhimComponent,
  ],
  exports: [DanhSachPhimComponent, ItemPhimComponent],
  imports: [
  // Modules
    CommonModule, CarouselModule, DanhSachPhimRoutingModule
  ]
})


export class DanhSachPhimModule {}
