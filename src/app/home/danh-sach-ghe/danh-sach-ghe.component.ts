import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit
} from "@angular/core";
import { ItemGheComponent } from "./item-ghe/item-ghe.component";

@Component({
  selector: "app-danh-sach-ghe",
  templateUrl: "./danh-sach-ghe.component.html",
  styleUrls: ["./danh-sach-ghe.component.scss"]
})
export class DanhSachGheComponent implements OnInit {
  //@ViewChildren(ItemGheComponent) tagListItemGhe: QueryList<ItemGheComponent>

  @ViewChildren(ItemGheComponent) tagListItemGhe: QueryList<ItemGheComponent>;

  //@Input() mangGhe: any = [];

  @Input() gheArray: any = [];

  mangTam: any = [];

  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  DanhSachGheDangDat = [];

  DatGheParent(status, ghe) {
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDangDat.push(ghe);
    } else {
      this.soGheDaDat--;
      this.soGheConLai++;
      for (let index in this.DanhSachGheDangDat) {
        if (this.DanhSachGheDangDat[index].SoGhe === ghe.SoGhe) {
          this.DanhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
    }
  }
  ngOnChanges(change: SimpleChanges) {
    this.soGheConLai = this.gheArray.length;
    this.mangTam = this.gheArray;
  }
  // ngAfterViewInit() {
  //   console.log("ghe trang danh ghe:", this.mangTam);
  //   for (let ghe of this.gheArray) {
  //     if (ghe.DaDat) {
  //       this.soGheConLai--;
  //     }
  //   }
  // }
  constructor() {}
  ngOnInit() {}
}
