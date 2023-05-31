import { MatButtonModule } from "@angular/material/button";
import { ButtonsModule } from "./charte-graphique/buttons/buttons.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        ButtonsModule,
        MatButtonModule,
        MatSidenavModule,
    ]
})
export class CoreModule {}