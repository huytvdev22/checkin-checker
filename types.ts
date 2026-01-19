export enum ShiftType {
  SHIFT_1 = 'SHIFT_1', // 8h -> 18h
  SHIFT_2 = 'SHIFT_2', // 8h30 -> 18h30
  SHIFT_3 = 'SHIFT_3', // 9h -> 19h
}

export interface ShiftConfig {
  id: ShiftType;
  name: string;
  startTime: string; // HH:mm
  endTime: string;   // HH:mm
  graceMinutes: number;
}

export interface RawLog {
  empId: string;
  timestamp: Date;
  rawString: string;
}

export enum DayStatus {
  NORMAL = 'Bình thường',
  LATE = 'Đi muộn',
  EARLY_ALLOWED = 'Về sớm (Trong hạn mức)',
  EARLY_VIOLATION = 'Về sớm (Vi phạm)',
  ABSENT = 'Vắng mặt',
  WEEKEND = 'Cuối tuần',
  MISSING_IN = 'Thiếu giờ vào',
  MISSING_OUT = 'Thiếu giờ ra'
}

export interface DailyRecord {
  date: Date; // 00:00:00 time
  checkIn: Date | null;
  checkOut: Date | null;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday...
  isFriday: boolean;
  status: DayStatus[];
  lateMinutes: number;
  earlyMinutes: number;
  notes: string[];
}

export interface AnalysisSummary {
  totalLate: number;
  totalEarlyAllowed: number;
  totalEarlyViolation: number;
  totalAbsent: number;
}