import { Component, OnInit } from '@angular/core';

export interface ExchangeTimeElement {
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
}

export interface ExchangeItemsElement {
  "items_1": string;
  "point_1": string;
  "items_2": string;
  "point_2": string;
}

const EXCHANGE_TIME: ExchangeTimeElement[] = [
  {mo:'', tu: '', we: '', th: '', fr: '3/4'},
  {mo:'', tu: '3/8', we: '3/9', th: '', fr: '3/11'},
  {mo:'', tu: '3/15', we: '3/16', th: '3/17', fr: '3/18'},
  {mo:'', tu: '3/22', we: '', th: '', fr: '3/25'},
  {mo:'3/28', tu: '3/29', we: '3/30', th: '', fr: ''},
];

const EXCHANGE_COLOR: { [val: string] : string; } = {
  '':'',
  '3/4':'green',
  '3/8':'red',
  '3/9':'yellow',
  '3/11':'blue',
  '3/15':'yellow',
  '3/16':'green',
  '3/17':'blue',
  '3/18':'red',
  '3/22':'green',
  '3/25':'yellow',
  '3/28':'special',
  '3/29':'blue',
  '3/30':'red',
};

const EXCHANGE_ITEMS: ExchangeItemsElement[] = [
  {'items_1': '帆布袋', 'point_1':' 4 色 ３ 點', 'items_2': '鞋袋', 'point_2':' 3 色 2 點'},
  {'items_1': '口罩(圖片待補)', 'point_1':'2 色 1 點', 'items_2': '', 'point_2':''},
];

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.component.html',
  styleUrls: ['./souvenir.component.css']
})
export class SouvenirComponent implements OnInit {
  exchangeTime_displayedColumns: string[] = ['mo', 'tu', 'we', 'th', 'fr'];
  exchangeTime_dataSource = EXCHANGE_TIME;
  exchangeItems_displayedColumns: string[] = ['items_1', 'point_1', 'items_2', 'point_2'];
  exchangeItems_dataSource = EXCHANGE_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

  getClassOf(val: string){
    return EXCHANGE_COLOR[val];
  }
}
