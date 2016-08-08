import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'SearchDialog',
  template: `
    <div class="search_dialog" *ngIf="displayed">
      <div class="search_box">
        <div class="search_header" >
          <input type="text" class="search_input" placeholder="도시 및 액티비티를 선택하세요">
        </div>
        <div>
          <button>X</button>
        </div>
      </div>

      <div>

      </div>
      This is search Dialog!
    </div>
  `,
  styles: [`

    .search_dialog{
      position: fixed;
      width: 400px;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 100;
      overflow: hidden;
      background-color: #AAAAAA;
    }
    .search_box{
      top: 0;
      left: 0;
      width: 85%;
      background: #f87e47;
      height: 50px;
      padding: 7px 46px 7px 13px;
      z-index: 2000;
    }

    .search_header{
      margin: 0;
      padding: 0;
      border: 0;
      font-weight: 400;
      vertical-align: baseline;
      background: transparent;

      padding: 8px 38px 8px 10px;
      font-size: 1.167em;
      background: #fff;
      float: left;
      width: 78%;
    }

    .search_input{
      height: 18px;
      line-height: 18px;
      padding: 0;
      vertical-align: baseline;
      border: 0;
      border-radius: 0;
      width: 100%;
      font-size: inherit;
      margin: 0
    }
  `]
})
export class SearchDialogComponent implements OnInit {
  @Input()
  displayed: boolean = false;

  sampleData = [
    {
      countryNameLN: '한국',
      countryNameEN: 'Korea',
      cities: [
        {
          cityNameLN: '서울',
          cityNameEN: 'Seoul'
        },
        {
          cityNameLN: '제주도',
          cityNameEN: 'Jeju Island'
        },
        {
          cityNameLN: '부산',
          cityNameEN: 'Busan'
        }
      ]
    },
    {
      countryNameLN: '독일',
      countryNameEN: 'Gemerny',
      cities: [
        {
          cityNameLN: '서울',
          cityNameEN: 'Seoul'
        },
        {
          cityNameLN: '제주도',
          cityNameEN: 'Jeju Island'
        },
        {
          cityNameLN: '부산',
          cityNameEN: 'Busan'
        }
      ]
    },
    {
      countryNameLN: '이탈리아',
      countryNameEN: 'Itary',
      cities: [
        {
          cityNameLN: '서울',
          cityNameEN: 'Seoul'
        },
        {
          cityNameLN: '제주도',
          cityNameEN: 'Jeju Island'
        },
        {
          cityNameLN: '부산',
          cityNameEN: 'Busan'
        }
      ]
    },
    {
      countryNameLN: '프랑스',
      countryNameEN: 'France',
      cities: [
        {
          cityNameLN: '서울',
          cityNameEN: 'Seoul'
        },
        {
          cityNameLN: '제주도',
          cityNameEN: 'Jeju Island'
        },
        {
          cityNameLN: '부산',
          cityNameEN: 'Busan'
        }
      ]
    },
    {
      countryNameLN: '피지',
      countryNameEN: 'Piji',
      cities: [
        {
          cityNameLN: '서울',
          cityNameEN: 'Seoul'
        },
        {
          cityNameLN: '제주도',
          cityNameEN: 'Jeju Island'
        },
        {
          cityNameLN: '부산',
          cityNameEN: 'Busan'
        }
      ]
    }
  ];

  ngOnInit(){
    // this.displayed = false;
  }

  showDialog(){

  }

}
