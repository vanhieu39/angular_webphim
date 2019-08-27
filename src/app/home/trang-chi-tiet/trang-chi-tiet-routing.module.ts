import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChiTietPhimComponent } from "./chi-tiet-phim/chi-tiet-phim.component";

const routes: Routes = [{ path: "", component: ChiTietPhimComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrangChiTietRoutingModule {}
