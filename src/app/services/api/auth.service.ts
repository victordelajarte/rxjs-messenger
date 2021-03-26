import { Injectable } from '@angular/core';

const dummyUser = {
  id: 1,
  username: 'Me',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public login(): Promise<{ id: number; username: string }> {
    return new Promise((resolve) => {
      // simulate call to API
      setTimeout(() => {
        resolve({ ...dummyUser });
      }, 500);
    });
  }
}
