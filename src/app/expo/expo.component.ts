import { Component, OnInit } from '@angular/core';

export interface ExpoConpany{
  date: string;
  name: string;
  place: string;
  time: string;
}

@Component({
  selector: 'app-expo',
  templateUrl: './expo.component.html',
  styleUrls: ['./expo.component.css']
})
export class ExpoComponent implements OnInit {
  COMPANIES_DATA: ExpoConpany[] = [
    {date:'',name:'台北市海運承攬運送商業同業公會',place:'',time:''},
    {date:'',name:'大江生醫股份有限公司',place:'',time:''},
    {date:'',name:'中鼎工程股份有限公司',place:'',time:''},
    {date:'',name:'臺灣日通國際物流股份有限公司',place:'',time:''},
    {date:'',name:'德翔海運股份有限公司',place:'',time:''},
    {date:'',name:'龍德造船工業股份有限公司',place:'',time:''},
    {date:'',name:'中國航運股份有限公司',place:'',time:''},
    {date:'',name:'法商迪卡儂有限公司',place:'',time:''},
    {date:'',name:'艾滴科技股份有限公司',place:'',time:''},
    {date:'',name:'中興工程顧問股份有限公司',place:'',time:''},
    {date:'',name:'東碩資訊股份有限公司',place:'',time:''},
    {date:'',name:'崴航國際股份有限公司',place:'',time:''},
    {date:'',name:'陽明海運股份有限公司',place:'',time:''},
    {date:'',name:'聯華食品工業股份有限公司',place:'',time:''},
    {date:'',name:'仲暘企業有限公司',place:'',time:''},
    {date:'',name:'原民會(原住民族委員會)',place:'',time:''},
    {date:'',name:'憶霖企業股份有限公司',place:'',time:''},
    {date:'',name:'矽格股份有限公司',place:'',time:''},
    {date:'',name:'欣興電子股份有限公司',place:'',time:''},
    {date:'',name:'安心食品服務股份有限公司',place:'',time:''},
    {date:'',name:'沛華實業股份有限公司',place:'',time:''},
    {date:'',name:'運達航運股份有限公司',place:'',time:''},
    {date:'',name:'東立物流股份有限公司',place:'',time:''},
    {date:'',name:'關貿網路股份有限公司',place:'',time:''},
  ];
  displayedColumns: string[] = ['date', 'name', 'place', 'time'];
  dataSource = this.COMPANIES_DATA;

  // spanningColumns = ['date', 'place', 'time'];
  spans:any = [];

  constructor() {
    this.complete(this.COMPANIES_DATA);
    this.cacheSpan('date', (d:any) => d.date);
    this.cacheSpan('place', (d:any) => d.place);
    this.cacheSpan('time', (d:any) => d.time);
  }

  ngOnInit(): void {
  }

  complete(data: ExpoConpany[]){
    for(let i = 0; i<this.COMPANIES_DATA.length; i++){
      if(i<12)
        this.COMPANIES_DATA[i].date = '3/23(三)';
      else
        this.COMPANIES_DATA[i].date = '3/24(四)';
      this.COMPANIES_DATA[i].place =
      `行政大樓
        展示廳`;
      this.COMPANIES_DATA[i].time =
      `上午 10:00
        ~
        下午 15:00`;
    }
  }

  cacheSpan(key:string, accessor:any) {
    for (let i = 0; i < this.COMPANIES_DATA.length;) {
      let currentValue = accessor(this.COMPANIES_DATA[i]);
      let count = 1;

      for (let j = i + 1; j < this.COMPANIES_DATA.length; j++) {
        if (currentValue != accessor(this.COMPANIES_DATA[j])) {
          break;
        }
        count++;
      }

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      this.spans[i][key] = count;
      i += count;
    }
  }

  getRowSpan(col: string, index: number) {
    return this.spans[index] && this.spans[index][col];
  }

}
