import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details3',
  standalone: true,
  imports: [],
  templateUrl: './details3.component.html',
  styleUrl: './details3.component.scss'
})
export class Details3Component {
  constructor(private route: ActivatedRoute) { }
}
