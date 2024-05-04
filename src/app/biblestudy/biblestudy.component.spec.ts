import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblestudyComponent } from './biblestudy.component';

describe('BiblestudyComponent', () => {
  let component: BiblestudyComponent;
  let fixture: ComponentFixture<BiblestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BiblestudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiblestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
