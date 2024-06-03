import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details2',
  standalone: true,
  imports: [],
  templateUrl: './details2.component.html',
  styleUrl: './details2.component.scss'
})
export class Details2Component {
  constructor(private route: ActivatedRoute) { }
}
