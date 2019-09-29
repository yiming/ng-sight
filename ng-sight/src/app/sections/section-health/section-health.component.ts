import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';
const SAMPLE_SERVERS=[
  {id:1, name:'Server 1', isOnline:true},
  {id:2, name:'Server 2', isOnline:true},
  {id:3, name:'Server 3', isOnline:false},
  {id:4, name:'Server 4', isOnline:true},
  {id:5, name:'Server 5', isOnline:false},
  {id:6, name:'Server 6', isOnline:true}
];
@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.scss']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }
  servers: Server[]=SAMPLE_SERVERS;
  ngOnInit() {
  }

}
