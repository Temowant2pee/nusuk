import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details1',
  standalone: true,
  imports: [],
  templateUrl: './details1.component.html',
  styleUrl: './details1.component.scss'
})
export class Details1Component {

  constructor(private route: ActivatedRoute) { }

}
