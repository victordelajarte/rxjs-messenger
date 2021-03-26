import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private user = new BehaviorSubject<{ id: number; username: string }>(null);
  public user$ = this.user.asObservable();

  constructor(private authService: AuthService) {}

  public get isConnected(): boolean {
    const user = this.user.getValue();
    return !!user?.id;
  }

  public async login() {
    this.user.next({ ...(await this.authService.login()) });
  }
}
