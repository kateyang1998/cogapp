import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraiseandworshipComponent } from './praiseandworship.component';

describe('PraiseandworshipComponent', () => {
  let component: PraiseandworshipComponent;
  let fixture: ComponentFixture<PraiseandworshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PraiseandworshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraiseandworshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
