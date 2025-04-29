import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
