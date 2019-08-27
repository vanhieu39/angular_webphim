import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuanLyPhimService {
  constructor(private http: HttpClient) {}
  getListMovie(): Observable<any> {
    const url =
      "http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";

    return this.http.get(url).pipe(
      tap(
        //Success
        () => {
          //Loading
        },

        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  getDetailFilm(maPhim): Observable<any> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`;

    return this.http.get(url).pipe(
      tap(
        //Success
        () => {
          //Loading
        },

        //Fail
        catchError(err => {
          return this.handleErr(err);
        })
      )
    );
  }
  handleErr(err) {
    //Handle các mã lỗi ở đây.
    return err;
  }
}
