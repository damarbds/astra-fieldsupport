import { TestBed, inject } from '@angular/core/testing';

import { MoonlayGmapService } from './moonlay-gmap.service';

describe('MoonlayGmapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoonlayGmapService]
    });
  });

  it('should be created', inject([MoonlayGmapService], (service: MoonlayGmapService) => {
    expect(service).toBeTruthy();
  }));
});
