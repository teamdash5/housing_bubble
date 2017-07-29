import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StoriesService } from './stories.service';

@Injectable()
export class StoriesGuard implements CanActivate {
  constructor(private _storiesService: StoriesService, private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const canActivate = this._storiesService.plot !== undefined && this._storiesService.lifeTime !== undefined;

    if (!canActivate) {
      this._router.navigate(['/buildyourstories']);
      return false;
    }

    return true;
  }
}
