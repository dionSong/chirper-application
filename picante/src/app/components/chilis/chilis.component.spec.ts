import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilisComponent } from './chilis.component';

describe('ChilisComponent', () => {
  let component: ChilisComponent;
  let fixture: ComponentFixture<ChilisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
