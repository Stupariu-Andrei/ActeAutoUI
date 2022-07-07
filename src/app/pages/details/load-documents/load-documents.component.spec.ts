import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDocumentsComponent } from './load-documents.component';

describe('LoadDocumentsComponent', () => {
  let component: LoadDocumentsComponent;
  let fixture: ComponentFixture<LoadDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
