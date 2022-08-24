import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GicDetailComponent } from './gic-detail.component';

describe('GicDetailComponent', () => {
  let component: GicDetailComponent;
  let fixture: ComponentFixture<GicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GicDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
