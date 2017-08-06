import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dne-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
  copyright: string = 'Copyright © ' + new Date().getFullYear() + ' Doron Epstein. All Rights Reserved.';
}
