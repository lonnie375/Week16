import { TestBed } from '@angular/core/testing';

import { DeckofcardsService } from './deckofcards.service';

describe('DeckofcardsService', () => {
  let service: DeckofcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckofcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
