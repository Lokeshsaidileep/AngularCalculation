import { Component } from "@angular/core";
import { RadioControlValueAccessor } from "@angular/forms";

@Component({
    selector:'Cylinder-Area',
    templateUrl:'./cylinder.component.html'

})
export class CylinderComponent{
    radius:number
    height:number
    area:number
    
    constructor(){
        this.radius = 0
        this.height = 0
        this.area = 2*22/7*this.radius*(this.radius+this.height)

    }
    onCycCalculate(){
        this.area = this.area = 3.14*this.radius*this.radius*this.height
    }
}