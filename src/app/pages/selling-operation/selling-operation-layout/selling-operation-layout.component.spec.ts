import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingOperationLayoutComponent } from './selling-operation-layout.component';

describe('SellingOperationLayoutComponent', () => {
  let component: SellingOperationLayoutComponent;
  let fixture: ComponentFixture<SellingOperationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingOperationLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingOperationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
