const mapping: Record<string, string> = {
  customers: 'customer',
  listings: 'listing',
  organizations: 'organization',
  users: 'user',
  'user-roles': 'user_role',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
