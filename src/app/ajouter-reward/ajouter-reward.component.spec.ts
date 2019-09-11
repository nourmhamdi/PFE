import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterRewardComponent } from './ajouter-reward.component';

describe('AjouterRewardComponent', () => {
  let component: AjouterRewardComponent;
  let fixture: ComponentFixture<AjouterRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
