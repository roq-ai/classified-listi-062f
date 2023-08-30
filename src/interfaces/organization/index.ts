import { ListingInterface } from 'interfaces/listing';
import { UserRoleInterface } from 'interfaces/user-role';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  listing?: ListingInterface[];
  user_role?: UserRoleInterface[];
  user?: UserInterface;
  _count?: {
    listing?: number;
    user_role?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
