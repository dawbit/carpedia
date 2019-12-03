import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineDetailsComponent } from './engine-details.component';

describe('EngineDetailsComponent', () => {
  let component: EngineDetailsComponent;
  let fixture: ComponentFixture<EngineDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
