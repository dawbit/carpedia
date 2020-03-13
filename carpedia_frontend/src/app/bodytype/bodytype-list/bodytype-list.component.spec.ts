import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodytypeListComponent } from './bodytype-list.component';

describe('BodytypeListComponent', () => {
  let component: BodytypeListComponent;
  let fixture: ComponentFixture<BodytypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodytypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodytypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
