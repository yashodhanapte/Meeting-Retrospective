import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulatingComponent } from './encapsulating.component';

describe('EncapsulatingComponent', () => {
  let component: EncapsulatingComponent;
  let fixture: ComponentFixture<EncapsulatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncapsulatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncapsulatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
