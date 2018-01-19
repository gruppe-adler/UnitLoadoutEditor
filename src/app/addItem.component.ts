import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './addItem.component.html',
  styles: ['.container { text-align: center; } button { margin-right: 2rem; margin-top: 1rem; }']
})
export class AddItemComponent {

  addItemForm = this.formBuilder.group({
    item: ['', Validators.required],
    count: [1, [Validators.required, Validators.min(1)]],
    ammo: [0, Validators.min(0)]
  });

  constructor(public dialogRef: MatDialogRef<AddItemComponent>,
              private formBuilder: FormBuilder) {}

  public confirmAddItem(): void {
    const result = [this.addItemForm.controls.item.value, this.addItemForm.controls.count.value];
    if (this.addItemForm.controls.ammo.value > 0) {
      result.push(this.addItemForm.controls.ammo.value);
    }

    this.dialogRef.close(result);
  }

  public abortAddItem(): void {
    this.dialogRef.close();
  }
}
