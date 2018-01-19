import { Injectable } from '@angular/core';

@Injectable()
export class LoadoutService {
  public parseLoadout(input: string): any {
    try {
      return JSON.parse(input);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public stringifyLoadout(input: any): string {
    return JSON.stringify(input);
  }
}
