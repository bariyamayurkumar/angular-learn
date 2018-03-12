import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcompetitionComponent } from './listcompetition.component';

describe('ListcompetitionComponent', () => {
  let component: ListcompetitionComponent;
  let fixture: ComponentFixture<ListcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
