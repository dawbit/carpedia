import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentCreateComponent } from './segment-create.component';

describe('SegmentCreateComponent', () => {
  let component: SegmentCreateComponent;
  let fixture: ComponentFixture<SegmentCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
