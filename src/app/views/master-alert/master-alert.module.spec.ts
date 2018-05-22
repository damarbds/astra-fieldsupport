import { MasterAlertModule } from './master-alert.module';

describe('MasterAlertModule', () => {
  let masterAlertModule: MasterAlertModule;

  beforeEach(() => {
    masterAlertModule = new MasterAlertModule();
  });

  it('should create an instance', () => {
    expect(masterAlertModule).toBeTruthy();
  });
});
