import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DanhSachGheComponent } from "./danh-sach-ghe.component";
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [DanhSachGheComponent, ItemGheComponent],
  exports: [DanhSachGheComponent],
  imports: [CommonModule]
})
export class DanhSachGheModule {}
