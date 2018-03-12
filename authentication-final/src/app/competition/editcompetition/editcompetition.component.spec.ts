import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompetitionComponent } from './editcompetition.component';

describe('EditcompetitionComponent', () => {
  let component: EditcompetitionComponent;
  let fixture: ComponentFixture<EditcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
