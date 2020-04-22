import { Component} from '@angular/core';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  dataJson: Object=  {};

  constructor(private dataService: DataService) {
    this.dataJson = this.dataService.getJson()
  }

}

/**
 * @author Femina
 * This is a sample and dev usage purpose to display the structure for data json
 * It is extendable and alterable depends of available data.
 * I can optimize it well and handy if it is needed
 */