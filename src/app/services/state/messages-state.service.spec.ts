import { TestBed } from '@angular/core/testing';

import { MessagesStateService } from './messages-state.service';

describe('StateMessagesService', () => {
  let service: MessagesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
