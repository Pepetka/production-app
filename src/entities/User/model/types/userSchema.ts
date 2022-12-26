import { UserRole } from '@/shared/const/role';

export interface User {
	id: string;
	username: string;
	avatar?: string;
	role: UserRole;
}

export interface UserSchema {
	authData?: User;
	_init?: boolean;
}
