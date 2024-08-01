// All properties that a User has
export interface MemberProps {
  email: string;
  memberCode: string;
  name: string;
  age: number | null;
}

// Properties that are needed for a user creation
export interface CreateMemberProps {
  name: string;
  email: string;
}

// Properties used for updating a user address
export interface UpdateUserAddressProps {
  country?: string;
  postalCode?: string;
  street?: string;
}

export enum UserRoles {
  admin = 'admin',
  moderator = 'moderator',
  guest = 'guest',
}
