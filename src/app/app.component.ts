import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, DetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'angular16_project';

  goToDeatil(){
    alert('ir al detalle');
  }
}
