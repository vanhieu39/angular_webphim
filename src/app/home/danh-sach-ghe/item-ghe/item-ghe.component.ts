import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  status: boolean = false;
  @Output() emitStatus = new EventEmitter();
  @Input() itemGhe;

  constructor() {}
  datGhe() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
    this.emitStatus.emit(this.status);
  }
  ngOnInit() {}
}
