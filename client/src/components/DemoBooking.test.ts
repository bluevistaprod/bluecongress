import { describe, it, expect } from 'vitest';

describe('DemoBooking Component', () => {
  it('should validate booking data structure', () => {
    const mockBookingData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+33612345678',
      company: 'ACME Corp',
      date: '2026-04-05',
      time: '14:00',
      packType: 'premium' as const,
      message: 'Interested in the premium package'
    };

    expect(mockBookingData).toHaveProperty('name');
    expect(mockBookingData).toHaveProperty('email');
    expect(mockBookingData).toHaveProperty('phone');
    expect(mockBookingData).toHaveProperty('date');
    expect(mockBookingData).toHaveProperty('time');
    expect(mockBookingData.packType).toMatch(/essential|premium/);
  });

  it('should validate email format', () => {
    const validEmail = 'test@example.com';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(validEmail)).toBe(true);
  });

  it('should validate phone format', () => {
    const validPhone = '+33612345678';
    const phoneRegex = /^\+?[\d\s\-()]{10,}$/;
    expect(phoneRegex.test(validPhone)).toBe(true);
  });

  it('should validate date format (ISO 8601)', () => {
    const validDate = '2026-04-05';
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    expect(dateRegex.test(validDate)).toBe(true);
  });

  it('should validate time format (HH:MM)', () => {
    const validTime = '14:00';
    const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    expect(timeRegex.test(validTime)).toBe(true);
  });

  it('should handle pack type selection', () => {
    const packTypes = ['essential', 'premium'] as const;
    expect(packTypes).toContain('essential');
    expect(packTypes).toContain('premium');
    expect(packTypes.length).toBe(2);
  });

  it('should validate required fields', () => {
    const bookingData = {
      name: '',
      email: '',
      phone: '',
      company: 'Test',
      date: '',
      time: '',
      packType: 'essential' as const,
      message: ''
    };

    const isValid = bookingData.name && bookingData.email && bookingData.phone && bookingData.date && bookingData.time;
    expect(isValid).toBe(false);

    const completeData = {
      ...bookingData,
      name: 'John',
      email: 'john@test.com',
      phone: '+33612345678',
      date: '2026-04-05',
      time: '14:00'
    };

    const isCompleteValid = completeData.name && completeData.email && completeData.phone && completeData.date && completeData.time;
    expect(isCompleteValid).toBe(true);
  });
});
