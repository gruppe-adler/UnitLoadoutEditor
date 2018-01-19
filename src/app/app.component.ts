import { Component } from '@angular/core';
import { LoadoutService } from './loadout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  input = '';
  data: any;

  constructor(private loadoutService: LoadoutService) {}

  public onInput(): void {
    this.data = this.loadoutService.parseLoadout(this.input);
    console.log(this.data);
  }

  public onChange(): void {
    this.input = this.loadoutService.stringifyLoadout(this.data);
  }
}
