import { TestBed } from '@angular/core/testing';
import { AttendanceService } from './attendance.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AttendanceService', () => {
  let service: AttendanceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AttendanceService]
    });

    service = TestBed.get(AttendanceService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
