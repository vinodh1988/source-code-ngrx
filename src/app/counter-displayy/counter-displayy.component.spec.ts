import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDisplayyComponent } from './counter-displayy.component';

describe('CounterDisplayyComponent', () => {
  let component: CounterDisplayyComponent;
  let fixture: ComponentFixture<CounterDisplayyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterDisplayyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterDisplayyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
