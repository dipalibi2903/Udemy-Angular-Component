import { Component } from '@angular/core';
import { IElement } from "./sever-element/IElement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'TestServer',content:'just a test!!'}];

  onServerAdded(inputData:IElement){
    this.serverElements.push({
      type:'server',
      name:inputData.name,
      content:inputData.content
    })
  }
  
  onBlueprintAdded(blueprintData:IElement){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.name,
      content:blueprintData.content
    })
  }

  onChangeFirst(){
    this.serverElements[0].name='My Name is Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}


