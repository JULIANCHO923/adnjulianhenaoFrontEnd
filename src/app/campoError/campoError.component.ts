import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-campoError',
  templateUrl: './campoError.component.html',
  styleUrls: ['./campoError.component.css']
})
export class CampoErrorComponent {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}