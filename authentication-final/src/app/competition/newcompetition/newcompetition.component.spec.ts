import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcompetitionComponent } from './newcompetition.component';

describe('NewcompetitionComponent', () => {
  let component: NewcompetitionComponent;
  let fixture: ComponentFixture<NewcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
