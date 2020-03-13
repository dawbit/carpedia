import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytypeDetailsComponent } from './bodytype-details.component';

describe('BodytypeDetailsComponent', () => {
  let component: BodytypeDetailsComponent;
  let fixture: ComponentFixture<BodytypeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytypeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
