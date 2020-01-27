import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClinicListComponent } from './clinic-list.component';
import { ClinicService } from '../clinic.service';

describe('ClinicListComponent', () => {
  let component: ClinicListComponent;
  let fixture: ComponentFixture<ClinicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClinicListComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ClinicService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
