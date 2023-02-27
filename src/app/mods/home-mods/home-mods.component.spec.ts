import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeModsComponent } from './home-mods.component';

describe('HomeModsComponent', () => {
  let component: HomeModsComponent;
  let fixture: ComponentFixture<HomeModsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeModsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeModsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
