import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineTrendComponent } from './line-trend.component';

describe('LineTrendComponent', () => {
  let component: LineTrendComponent;
  let fixture: ComponentFixture<LineTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineTrendComponent]
    });
    fixture = TestBed.createComponent(LineTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
