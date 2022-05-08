import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleLayoutComponent } from './sale-layout.component';

describe('SaleLayoutComponent', () => {
  let component: SaleLayoutComponent;
  let fixture: ComponentFixture<SaleLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
