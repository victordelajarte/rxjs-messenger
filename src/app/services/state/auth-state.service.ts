import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from '../api/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  private user = new BehaviorSubject<{ id: number; username: string }>(null);
  public user$ = this.user.asObservable();

  constructor(private authService: AuthService) {
    const user = localStorage.getItem('user');
    if (user) {
      this.user.next(JSON.parse(user));
    }
  }

  public get isConnected(): boolean {
    const user = this.user.getValue();
    return !!user?.id;
  }

  public get userName(): string | null {
    const user = this.user.getValue();
    return user?.username;
  }

  public async login() {
    const user = await this.authService.login();
    this.user.next({ ...user });
  }

  public logout() {
    this.authService.logout();
    this.user.next(null);
  }
}
