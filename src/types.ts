export type UserType = 'police' | 'government' | 'citizen';

export interface User {
  id: string;
  name: string;
  type: UserType;
  stationId?: string;
  rank?: string;
  department?: string;
}
