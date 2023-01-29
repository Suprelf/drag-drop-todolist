import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskTaskComponent } from './desk-task.component';

describe('DeskTaskComponent', () => {
  let component: DeskTaskComponent;
  let fixture: ComponentFixture<DeskTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeskTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
