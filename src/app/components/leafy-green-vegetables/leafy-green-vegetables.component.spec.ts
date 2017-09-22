import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafyGreenVegetablesComponent } from './leafy-green-vegetables.component';

describe('LeafyGreenVegetablesComponent', () => {
  let component: LeafyGreenVegetablesComponent;
  let fixture: ComponentFixture<LeafyGreenVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafyGreenVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafyGreenVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
