import { Component, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../../services/data.service';
import { DataSource } from '@angular/cdk/table';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Project } from '../../models/project.model';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('expandMode', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('250ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})


export class ProductListComponent {
  displayedColumns = [
    'name',
    'industry',
    'designers',
    'clients',
    'contractors',
  ];
  dataSource: MatTableDataSource<Project>;
  expandedElement: Project;

  projectss: Observable<Project[]>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataService: DataService,private store: Store<AppState>) {
    const projectArr = [];
    this.dataService
      .getData()
      .subscribe((projects) => projectArr.push(projects));
    this.dataSource = new MatTableDataSource(projectArr[0]);

    // this.projectss = store.select('project') 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
}

export class ProjectDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<Project[]> {
    return this.dataService.getData();
  }

  disconnect() {}
}




/**
 * @author Femina
 * This is the product listing component to display our sample projects
 * As it is only given module focused for now I kept this as a main and startup view.
 * This displays 
 * 1. list of projects
 * 2. With Filter
 * 3. With Sort of all columns( ASC & DESC)
 * 4. With Pagination
 * 5. Expanded View of particular selected Project with sample details.
 * 
 * Here I have used 2 way of state management.
 * 
 * 1. With ngRX Store
 * 2. Without ngRX Store
 * 
 * As it is very minimal scenario, though there is no need for ngRX Store just to show implementation I have implemented.
 * It can be optimizable well and good in future if it is needed.
 */