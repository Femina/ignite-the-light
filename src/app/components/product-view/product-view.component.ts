import { Component, OnInit, Input } from '@angular/core';
import {Project} from '../../models/project.model'

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Input() product: Project;

  constructor() { }

  ngOnInit(): void {
  }

}




/**
 * @author Femina
 * This is the product view component for Expanded View
 * It displays sample project details with minimal information.
 * This can be optimizable when details are more.
 */
