import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { CachedImage } from '../../shared/cached-image/cached-image'

@Injectable({
  providedIn: 'root'
})
export class ImageCacheService {
  private _cacheUrls: string[] = []
  private _cachedImages: CachedImage[] = []

  constructor(
    private http: HttpClient,
  ) { }

  getImage(url:string): Observable<Blob | string> {
    const index = this._cachedImages.findIndex(image => image.url === url)
    if (index > -1) {
      const image = this._cachedImages[index]
      return of(URL.createObjectURL(image.blob))
    }
    return this.http
      .get(url, {responseType: 'blob'})
      .pipe(tap(blob => this.checkAndCacheImage(url, blob)),catchError(this.handleError))
  }

  handleError(error: any) {
    return Observable.throw(error.statusText)
  }

  checkAndCacheImage(url: string, blob: Blob): void {
    if ( this._cacheUrls.indexOf(url) > -1) {
      this._cachedImages.push({url, blob})
    }
  }

  set cacheUrls(urls: string[]) {
    this._cacheUrls = [...urls]
  }

  get cacheUrls(): string[] {
    return this._cacheUrls
  }

  set cachedImages(image: CachedImage) {
    this._cachedImages.push(image)
  }
}
