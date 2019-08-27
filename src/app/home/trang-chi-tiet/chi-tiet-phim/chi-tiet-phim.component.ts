import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "@DataService/data.service";

@Component({
  selector: "app-chi-tiet-phim",
  templateUrl: "./chi-tiet-phim.component.html",
  styleUrls: ["./chi-tiet-phim.component.scss"]
})
export class ChiTietPhimComponent implements OnInit {
  id: any;
  tenPhim: string;
  movie: any;

  subChiTietPhim = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.getParamsFromURL();
    this.chiTietPhim();
  }

  getParamsFromURL() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.tenPhim = params.tenPhim;
    });
  }

  chiTietPhim() {
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`;
    this.subChiTietPhim = this.dataService.get(uri).subscribe((data: any) => {
      this.movie = data;
    });
  }

  datVe(maLichChieu) {
    this.router.navigate(["home/phong-ve", maLichChieu]);
  }

  ngOnDestroy() {
    this.subChiTietPhim.unsubscribe();
  }
}
