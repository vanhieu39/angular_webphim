import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DangNhapComponent } from "./dang-nhap.component";

const routes: Routes = [
  {
    path: "",
    component: DangNhapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangNhapRoutingModule {}
