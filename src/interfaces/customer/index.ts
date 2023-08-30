import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  zip_code: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
}
