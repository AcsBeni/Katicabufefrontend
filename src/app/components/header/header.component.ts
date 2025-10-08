import { Component, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    @Input() title:string = '';
}
