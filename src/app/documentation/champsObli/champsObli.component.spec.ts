/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChampsObliComponent } from './champsObli.component';

describe('ChampsObliComponent', () => {
  let component: ChampsObliComponent;
  let fixture: ComponentFixture<ChampsObliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampsObliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampsObliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
