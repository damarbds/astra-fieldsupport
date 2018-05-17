import { TrackFsPositionModule } from './track-fs-position.module';

describe('TrackFsPositionModule', () => {
  let trackFsPositionModule: TrackFsPositionModule;

  beforeEach(() => {
    trackFsPositionModule = new TrackFsPositionModule();
  });

  it('should create an instance', () => {
    expect(trackFsPositionModule).toBeTruthy();
  });
});
