import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingOptionChooserComponent } from './selling-option-chooser.component';

describe('SellingOptionChooserComponent', () => {
  let component: SellingOptionChooserComponent;
  let fixture: ComponentFixture<SellingOptionChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingOptionChooserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingOptionChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
