import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTaskComponent } from './sidebar-task.component';

describe('SidebarTaskComponent', () => {
  let component: SidebarTaskComponent;
  let fixture: ComponentFixture<SidebarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
