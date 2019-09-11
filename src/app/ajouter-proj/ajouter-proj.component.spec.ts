import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProjComponent } from './ajouter-proj.component';

describe('AjouterProjComponent', () => {
  let component: AjouterProjComponent;
  let fixture: ComponentFixture<AjouterProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
