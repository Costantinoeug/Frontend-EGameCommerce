import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedGameDetailComponent } from './purchased-game-detail.component';

describe('PurchasedGameDetailComponent', () => {
  let component: PurchasedGameDetailComponent;
  let fixture: ComponentFixture<PurchasedGameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasedGameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedGameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
