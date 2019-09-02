import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  Input,
  SimpleChanges,
  Output,
  EventEmitter
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

  soGheDaDat: number = 0;
  soGheConLai: number = 0;
  DanhSachGheDangDat = [];

  @Output() emitDSDangDat = new EventEmitter();

  DatGheParent(status, ghe) {
    let ve: { MaGhe: string; GiaVe: number } = {
      MaGhe: ghe.MaGhe,
      GiaVe: ghe.GiaVe
    };
    if (status) {
      this.soGheDaDat++;
      this.soGheConLai--;
      this.DanhSachGheDangDat.push(ve);
      // console.log("danh sach ghe dang dat", this.DanhSachGheDangDat.length);
      // if (this.DanhSachGheDangDat.length === 0) {
      //   alert("Xin mời chọn ghế");
      // } else {
      this.emitDSDangDat.emit(this.DanhSachGheDangDat);
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
  ngOnChanges(changes: SimpleChanges) {
    const soGheDaDat = this.gheArray.filter(x => x.DaDat === true);
    this.soGheConLai = this.gheArray.length - soGheDaDat.length;
    this.soGheDaDat = soGheDaDat.length;
    console.log(this.gheArray);
  }

  constructor() {}
  ngOnInit() {}
}
