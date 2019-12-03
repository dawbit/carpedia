import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineCreateComponent } from './engine-create.component';

describe('EngineCreateComponent', () => {
  let component: EngineCreateComponent;
  let fixture: ComponentFixture<EngineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
