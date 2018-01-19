import { Component, OnInit } from '@angular/core';
import { LoadoutService } from './loadout.service';
import { MatDialog } from '@angular/material';
import { AddItemComponent } from './addItem.component';
import { EditItemComponent } from './editItem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  input = '';
  data: any;

  constructor(private loadoutService: LoadoutService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.input = JSON.stringify([['', '', '', '', [], [], ''], ['', '', '', '', [], [], ''], ['', '', '', '', [], [], ''], ['', []], ['', []], ['', []], '', '', ['', '', '', '', [], [], ''], ['', '', '', '', '', '']]);
    this.onInput();
  }

  public onInput(): void {
    this.data = this.loadoutService.parseLoadout(this.input);
    console.log(this.data);
  }

  public onChange(): void {
    this.input = this.loadoutService.stringifyLoadout(this.data);
  }

  public isDefined(data): boolean {
    return data !== undefined && data != null && data !== '';
  }

  public deleteItem(source, data): void {
    const index = source.indexOf(data);
    if (index > -1) {
      source.splice(index, 1);
    }
    this.onChange();
  }

  public addItemDialog(source): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '40rem',
      height: '18rem'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.isDefined(result)) {
        source.push(result);
        this.onChange();
      }
    });
  }

  public editItemDialog(source, data): void {
    const dialogRef = this.dialog.open(EditItemComponent, {
      width: '40rem',
      height: '18rem',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.isDefined(result)) {
        const index = source.indexOf(data);
        if (index > -1) {
          source[index] = result;
        }
        this.onChange();
      }
    });
  }
}
