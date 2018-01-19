import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './editItem.component.html',
  styles: ['.container { text-align: center; } button { margin-right: 2rem; margin-top: 1rem; }']
})
export class EditItemComponent {

  addItemForm = this.formBuilder.group({
    item: ['', Validators.required],
    count: [1, [Validators.required, Validators.min(1)]],
    ammo: [0, Validators.min(0)]
  });

  constructor(public dialogRef: MatDialogRef<EditItemComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private formBuilder: FormBuilder) {
    this.addItemForm.controls.item.setValue(data[0]);
    this.addItemForm.controls.count.setValue(data[1]);
    this.addItemForm.controls.ammo.setValue(data[2]);
  }

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
