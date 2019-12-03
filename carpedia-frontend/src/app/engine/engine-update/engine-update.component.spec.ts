import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineUpdateComponent } from './engine-update.component';

describe('EngineUpdateComponent', () => {
  let component: EngineUpdateComponent;
  let fixture: ComponentFixture<EngineUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
