import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StoriesService } from './stories.service';

@Injectable()
export class StoriesGuard implements CanActivate {
  constructor(private _storiesService: StoriesService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this._storiesService.plot !== undefined && this._storiesService.lifeTime !== undefined;
  }
}
