import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelContractComponent } from './model-contract.component';

describe('ModelContractComponent', () => {
  let component: ModelContractComponent;
  let fixture: ComponentFixture<ModelContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
