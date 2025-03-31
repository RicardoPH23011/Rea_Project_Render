import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontproyectodaw';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/hello', {
      headers: {
        'Authorization': 'Basic ' + btoa(`admin:admin123`)
      }
    }).subscribe(data => {
      console.log(data);
      // this.title = data;
    });
  }
}
