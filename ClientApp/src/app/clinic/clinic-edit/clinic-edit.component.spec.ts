import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClinicEditComponent } from './clinic-edit.component';
import { ClinicService } from '../clinic.service';

describe('ClinicEditComponent', () => {
  let component: ClinicEditComponent;
  let fixture: ComponentFixture<ClinicEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ClinicService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
