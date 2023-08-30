import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface ListingInterface {
  id?: string;
  title: string;
  description?: string;
  price: number;
  category: string;
  status: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface ListingGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  status?: string;
  organization_id?: string;
}
