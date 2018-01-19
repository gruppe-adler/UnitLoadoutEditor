import { Injectable } from '@angular/core';

@Injectable()
export class LoadoutService {
  public parseLoadout(input: string): any {
    try {
      const data = JSON.parse(input);
      if (data.length !== 10) {
        throw new Error(`Invalid data length. Was: ${data.length}. Expected: 10`);
      }
      if (data[0].length === 0) {
        data[0] = ['', '', '', '', [], [], ''];
      }

      if (data[1].length === 0) {
        data[1] = ['', '', '', '', [], [], ''];
      }

      if (data[2].length === 0) {
        data[2] = ['', '', '', '', [], [], ''];
      }

      if (data[8].length === 0) {
        data[8] = ['', '', '', '', [], [], ''];
      }

      return data;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public stringifyLoadout(input: any): string {
    return JSON.stringify(input);
  }
}
