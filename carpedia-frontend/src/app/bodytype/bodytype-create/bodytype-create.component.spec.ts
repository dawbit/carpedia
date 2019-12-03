import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytypeCreateComponent } from './bodytype-create.component';

describe('BodytypeCreateComponent', () => {
  let component: BodytypeCreateComponent;
  let fixture: ComponentFixture<BodytypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
