import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentUpdateComponent } from './segment-update.component';

describe('SegmentUpdateComponent', () => {
  let component: SegmentUpdateComponent;
  let fixture: ComponentFixture<SegmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
