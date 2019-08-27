import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DangKyComponent } from "./dang-ky.component";

const routes: Routes = [
  {
    path: "",
    component: DangKyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DangKyRoutingModule {}
