import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmponentComponent } from './omponent.component';

describe('OmponentComponent', () => {
  let component: OmponentComponent;
  let fixture: ComponentFixture<OmponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
