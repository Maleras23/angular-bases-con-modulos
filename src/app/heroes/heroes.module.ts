import { NgModule } from "@angular/core";
import { ListComponent } from "./list/list";
import { HeroComponent } from "./hero/hero";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    ListComponent,
    HeroComponent
  ],
  exports: [
    ListComponent,
    HeroComponent
  ],
  imports: [CommonModule

  ]
})
export class HeroesModule{}
