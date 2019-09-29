import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.scss']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }
  orders: Order[]=[
    {id: 1, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,1), fulfilled: new Date(2017,12,2), status:'Completed'},
    {id: 2, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,3), fulfilled: new Date(2017,12,4), status:'Completed'},
    {id: 3, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,5), fulfilled: new Date(2017,12,6), status:'Completed'},
    {id: 4, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,7), fulfilled: new Date(2017,12,8), status:'Completed'},
    {id: 5, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,9), fulfilled: new Date(2017,12,10), status:'Completed'},
    {id: 6, customer:{id:1, name: 'Main St Bakery', state: 'CO', email:'user@mail.com'}, 
      total:230, placed: new Date(2017,12,11), fulfilled: new Date(2017,12,12), status:'Completed'},
  ];
  ngOnInit() {
  }

}
