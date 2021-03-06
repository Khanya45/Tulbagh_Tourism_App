import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UtilState, UtilStore } from './util.store';

@Injectable({ providedIn: 'root' })
export class UtilQuery extends Query<UtilState> {
  countries = this.select((state) => state.countries);

  constructor(protected store: UtilStore) {
    super(store);
  }
}