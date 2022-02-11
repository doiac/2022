import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CompanyData {
  industry: string;
  name: string;
  date: string;
  place: string;
}

/** Constants used to fill up our data base. */
const INDUSTRYS: string[] = [
  '綜合商品批發代理業',
  '電腦及其週邊設備製造業',
  '貨運承攬業',
  '電腦週邊相關業',
  '其他電子零組件相關業',
  '不動產業',
  '電力機械器材製造修配業',
  '貨運承攬業',
  '貨櫃運輸服務業',
  '人身保險業',
  '清潔用品製造業',
  '航海運輸服務業',
  '水上運輸輔助業',
  '汽車及其零件製造業',
  '海運貨櫃運輸物流業',
  '產物保險業',
  '半導體製造業',
  '政府/民意機關',
  '工商顧問服務業',
  '政府/民意機關',
  '人身保險業',
  '電腦及其週邊設備製造業',
  '建築及工程技術服務業',
  '船舶及其零件製造修配業',
];
const PLACES: string[] = [
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
  '第一演講廳',
  '第二演講廳',
];
const NAMES: string[] = [
  '歐陸檢驗',
  '聯想環球科技',
  '陽明海運',
  '緯創資通',
  '敦南科技',
  '居易不動產',
  '船舶中心',
  '台灣日通',
  '運達航運',
  '錠嵂保險',
  '花王(台灣)',
  '萬海航運',
  '全港通航業',
  '胡連精密',
  '長榮海運',
  '信德仕保險',
  '台積電',
  '海巡署',
  '濤濤國際',
  '國防部',
  '三商美邦',
  '廣達電腦',
  '中鼎工程',
  '驗船中心',
];

const DATES: Date[] = [
  new Date("2022-03-04"),
  new Date("2022-03-04"),
  new Date("2022-03-08"),
  new Date("2022-03-09"),
  new Date("2022-03-09"),
  new Date("2022-03-11"),
  new Date("2022-03-11"),
  new Date("2022-03-15"),
  new Date("2022-03-15"),
  new Date("2022-03-16"),
  new Date("2022-03-16"),
  new Date("2022-03-17"),
  new Date("2022-03-18"),
  new Date("2022-03-18"),
  new Date("2022-03-22"),
  new Date("2022-03-22"),
  new Date("2022-03-25"),
  new Date("2022-03-25"),
  new Date("2022-03-28"),
  new Date("2022-03-28"),
  new Date("2022-03-29"),
  new Date("2022-03-29"),
  new Date("2022-03-30"),
  new Date("2022-03-30"),
];

const weekDays: string[] = [
  '一','二','三','四','五','六','日',
];

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.css']
})
export class SeminarComponent implements AfterViewInit {

  displayedColumns: string[] = ['industry', 'name', 'date', 'place'];
  dataSource: MatTableDataSource<CompanyData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    const companies = Array.from({length: 24}, (_, k) => createFromDatabase(k + 1));
    this.dataSource = new MatTableDataSource(companies);
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

function createFromDatabase(id: number): CompanyData {
  return {
    industry: INDUSTRYS[id-1],
    name: NAMES[id-1],
    date: (DATES[id-1].getMonth()+1).toString() + '/' + DATES[id-1].getDate().toString() + '(' + weekDays[DATES[id-1].getDay()-1] + ')',
    place: PLACES[id-1],
  };
}
