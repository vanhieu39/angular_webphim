import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DangKyComponent } from "./dang-ky.component";
import { DangKyRoutingModule } from "./dang-ky-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DangKyComponent],
  imports: [CommonModule, DangKyRoutingModule, FormsModule]
})
export class DangKyModule {}
