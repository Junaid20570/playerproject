import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotPlayersComponent } from './allot-players.component';

describe('AllotPlayersComponent', () => {
  let component: AllotPlayersComponent;
  let fixture: ComponentFixture<AllotPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllotPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllotPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
