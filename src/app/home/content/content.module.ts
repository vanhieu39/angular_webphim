import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentComponent } from "./content.component";
// import { DanhSachPhimModule } from "../danh-sach-phim/danh-sach-phim.module";
import { TimPhimComponent } from "./tim-phim/tim-phim.component";
import { BtnLoaiPhimComponent } from "./btn-loai-phim/btn-loai-phim.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ContentRoutingModule } from './content-routing.module';
import { DanhSachPhimModule } from './../danh-sach-phim/danh-sach-phim.module';
import { CarouselComponent } from './carousel/carousel.component';
@NgModule({
  declarations: [
    ContentComponent,
    TimPhimComponent,
    SideBarComponent,
    BtnLoaiPhimComponent,
    CarouselComponent
  ],
  exports: [
    ContentComponent,
    TimPhimComponent,
    SideBarComponent,
    BtnLoaiPhimComponent
  ],
  imports: [CommonModule, CarouselModule, ContentRoutingModule, DanhSachPhimModule]
})


export class ContentModule {}
