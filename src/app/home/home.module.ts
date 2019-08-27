import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule]
})
export class HomeModule {}
