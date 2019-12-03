import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytypeUpdateComponent } from './bodytype-update.component';

describe('BodytypeUpdateComponent', () => {
  let component: BodytypeUpdateComponent;
  let fixture: ComponentFixture<BodytypeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytypeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
