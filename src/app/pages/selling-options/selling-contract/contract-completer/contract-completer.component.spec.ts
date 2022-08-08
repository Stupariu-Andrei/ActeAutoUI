import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCompleterComponent } from './contract-completer.component';

describe('ContractCompleterComponent', () => {
  let component: ContractCompleterComponent;
  let fixture: ComponentFixture<ContractCompleterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCompleterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCompleterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
