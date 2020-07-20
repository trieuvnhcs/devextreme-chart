import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { DxChartModule , DxPieChartModule} from "devextreme-angular";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        DxPieChartModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
