import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTrendComponent } from './error-trend.component';

describe('ErrorTrendComponent', () => {
  let component: ErrorTrendComponent;
  let fixture: ComponentFixture<ErrorTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorTrendComponent]
    });
    fixture = TestBed.createComponent(ErrorTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
