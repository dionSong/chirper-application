import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliFormComponent } from './chili-form.component';

describe('ChiliFormComponent', () => {
  let component: ChiliFormComponent;
  let fixture: ComponentFixture<ChiliFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiliFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
