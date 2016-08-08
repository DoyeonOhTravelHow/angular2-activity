import { Component, ViewChild, OnInit } from '@angular/core';

import { CityService } from '../../services/city.service';
import { City, RelatedItem } from '../../models/city.model';

@Component({
  selector: 'PickCity',
  template: `
    <div>
      <input #searchBox type="text" (keyup)="onKeyup($event)" placeholder="도시를 입력하세요" >
      <ul *ngFor="let city of autoCompleteCitys">
        <li (click)="onSelectCity($event)"><a>{{ city.cityNameLN }}</a></li>
      </ul>
    </div>
  `,
  providers: [ CityService ],
  styles: [`
    
  `],
  styleUrls: [
    './app/+activity/+pickCity/pick-city.component.css'
  ]
})
export class ActivityPickCityComponent {
  @ViewChild('searchBox')
  searchBox;

  citys: City[];
  autoCompleteCitys: City[];

  constructor(
    private _cityService: CityService
  ) { }

  onSelectCity(e){
    let chooseText = e.target.text;
    this.searchBox.nativeElement.value = chooseText;
    this.searchBox.nativeElement.focus();
    this.resetAutoComplete();
  }

  resetAutoComplete(){
    this.autoCompleteCitys = [];
  }

  onKeyup(e){
    console.log('what the');
    let searchText = e.target.value;

    if(searchText.length >= 2){
      this.autoCompleteCitys = this.citys.filter(
        (city) => { return city.cityNameLN.indexOf(searchText) != -1 }
      );
    }else{
      this.resetAutoComplete();
    }
  }

  ngOnInit(){
    this.getCitys();
    this.resetAutoComplete();
  }

  getCitys(): void{
    this._cityService.getCitys()
                .subscribe(
                    result    => this.citys = result,
                    error     => console.error(error),
                    ()        => console.log("this is finally code")
    );
  }
}
