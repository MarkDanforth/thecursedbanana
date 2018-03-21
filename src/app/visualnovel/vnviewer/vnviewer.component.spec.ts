import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VnviewerComponent } from './vnviewer.component';

describe('VnviewerComponent', () => {
  let component: VnviewerComponent;
  let fixture: ComponentFixture<VnviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VnviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VnviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
