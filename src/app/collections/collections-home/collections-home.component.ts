import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'},
  ];
  data = [
    { name: 'James', age: 29, job: 'Designer'},
    { name: 'Jill', age: 33, job: 'Engineer'},
    { name: 'Elyse', age: 25, job: 'Engineer'},
  ];

}
