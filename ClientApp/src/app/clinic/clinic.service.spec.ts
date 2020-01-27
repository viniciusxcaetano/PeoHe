import { TestBed } from '@angular/core/testing';
import { ClinicService } from './clinic.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ClinicService', () => {
  let service: ClinicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClinicService]
    });

    service = TestBed.get(ClinicService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
