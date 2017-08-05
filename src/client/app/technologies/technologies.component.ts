import { Component, OnInit } from '@angular/core';

import { TechnologiesService } from './technologies.service';

@Component({
  moduleId: module.id,
  selector: 'dne-technologies',
  templateUrl: 'technologies.component.html',
  styleUrls: ['technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  errorMessage: string;
  technologies: any[] = [];

  constructor(private _technologiesService: TechnologiesService) { }

  ngOnInit() {
    this.getTechnologies();
  }

  getTechnologies() {
    this._technologiesService.get()
      .subscribe(
      technologies => this.technologies = technologies,
      error => this.errorMessage = <any>error
      );
  }
}
