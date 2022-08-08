import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingContractLayoutComponent } from './selling-contract-layout.component';

describe('SellingContractLayoutComponent', () => {
  let component: SellingContractLayoutComponent;
  let fixture: ComponentFixture<SellingContractLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingContractLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingContractLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
