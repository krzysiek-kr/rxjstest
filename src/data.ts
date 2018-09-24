export const DATA_1 = [1, 2, 3, 4, 5];
import { Observable, of, throwError } from 'rxjs';

export const TRANSLATIONS = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six'
};

export function getTranslations(x): Observable<string> {
  return of(TRANSLATIONS[x]);
}

export function getTranslationsWithError(x): Observable<string> {
  if (x === 4) {
    return throwError('error');
  } else {
    return of(TRANSLATIONS[x]);
  }
}
