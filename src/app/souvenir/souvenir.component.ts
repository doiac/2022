import { Component, OnInit } from '@angular/core';

export interface ExchangeTimeElement {
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
  {tu: '', we: '3/2', th: '3/3', fr: '3/4'},
  {tu: '3/8', we: '3/9', th: '3/10', fr: '3/11'},
  {tu: '3/15', we: '3/16', th: '3/17', fr: '3/18'},
  {tu: '3/22', we: '', th: '', fr: '3/25'},
  {tu: '3/29', we: '3/30', th: '', fr: ''},
];

const EXCHANGE_COLOR: { [val: string] : string; } = {
  '':'',
  '3/2':'red',
  '3/3':'yellow',
  '3/4':'green',
  '3/8':'red',
  '3/9':'yellow',
  '3/10':'green',
  '3/11':'blue',
  '3/15':'yellow',
  '3/16':'green',
  '3/17':'blue',
  '3/18':'red',
  '3/22':'green',
  '3/25':'yellow',
  '3/29':'blue',
  '3/30':'red',
};

const EXCHANGE_ITEMS: ExchangeItemsElement[] = [
  {'items_1': '綜合式便利貼', 'point_1':'任意 2 色，共 2 點', 'items_2': '鞋袋', 'point_2':'4 色，共 4 點'},
  {'items_1': '帆布袋', 'point_1':'4 色，共 4 點', 'items_2': '', 'point_2':''},
];

@Component({
  selector: 'app-souvenir',
  templateUrl: './souvenir.component.html',
  styleUrls: ['./souvenir.component.css']
})
export class SouvenirComponent implements OnInit {
  exchangeTime_displayedColumns: string[] = ['tu', 'we', 'th', 'fr'];
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
