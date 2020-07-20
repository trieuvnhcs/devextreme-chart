import { NgModule, Component, enableProdMode,OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
    
    areas = [{
    country: "Russia",
    area: 12,
    type_e : '1'
}, {
    country: "Canada",
    area: 7,
    type_e : '1'
}, {
    country: "USA",
    area: 7,
    type_e : '1'
}, {
    country: "China",
    area: 7,
    type_e : '1'
}, {
    country: "Brazil",
    area: 6,
    type_e : '1'
}, {
    country: "Australia",
    area: 5,
    type_e : '1'
}, {
    country: "India",
    area: 2,
    type_e : '2'
}];

type = '1';
    constructor() {
        
    }
    ngOnInit(){
      this.type = '1';
    }

    onPointHoverChanged (e) {
      
        const point = e.target;
        console.log(point);
        console.log(this.type);
        if (point.isHovered()) {
            point.value = point.argument;
            point.showTooltip();
        }else{
          point.hideTooltip();
        }

        
    }
    customizaToooltip(this){
      var type = this.point.data.type_e;
      console.log(this.type);
      if(type == '1'){
        return {'text' : this.argument}
      }
      if(type == '2'){
        return {'text' : this.value}
      }
      return {'text' : this.percentText}

    }

    
}

// [customizeTooltip]="customizaToooltip"


