interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Admin', 'Advertiser', 'Staff Member'],
  tenantName: 'Organization',
  applicationName: 'Classified Listing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "View the Organization's Listings",
    'Search the Listings',
    'View the details of a specific Listing',
    'Sort the Listings',
  ],
  ownerAbilities: [
    'Manage Organization profile',
    'Invite and remove team members',
    'View Organization profile',
    'Manage Listings',
  ],
};
