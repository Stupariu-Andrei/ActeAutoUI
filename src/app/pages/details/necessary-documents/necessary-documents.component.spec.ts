import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecessaryDocumentsComponent } from './necessary-documents.component';

describe('NecessaryDocumentsComponent', () => {
  let component: NecessaryDocumentsComponent;
  let fixture: ComponentFixture<NecessaryDocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecessaryDocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecessaryDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
