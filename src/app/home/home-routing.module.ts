import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        loadChildren:
          // "./danh-sach-phim/danh-sach-phim.module#DanhSachPhimModule"
          "./content/content.module#ContentModule"
      },
      {
        path: "chi-tiet-phim/:id",
        loadChildren:
          "./trang-chi-tiet/trang-chi-tiet.module#TrangChiTietModule"
      },
      {
        path: "dang-ky",
        loadChildren: "./dang-ky/dang-ky.module#DangKyModule"
      },
      {
        path: "dang-nhap",
        loadChildren: "./dang-nhap/dang-nhap.module#DangNhapModule"
      },
      {
        path: "phong-ve/:malichchieu",
        loadChildren: "./phong-ve/phong-ve.module#PhongVeModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
