import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnLoaiPhimComponent } from './btn-loai-phim.component';

describe('BtnLoaiPhimComponent', () => {
  let component: BtnLoaiPhimComponent;
  let fixture: ComponentFixture<BtnLoaiPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnLoaiPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnLoaiPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
