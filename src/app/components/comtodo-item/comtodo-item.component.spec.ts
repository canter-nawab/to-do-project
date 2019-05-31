import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtodoItemComponent } from './comtodo-item.component';

describe('ComtodoItemComponent', () => {
  let component: ComtodoItemComponent;
  let fixture: ComponentFixture<ComtodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComtodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
