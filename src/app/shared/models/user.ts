export interface Roles { 
    subscriber?: boolean;
    editor?: boolean;
    admin?: boolean;
  }
  
  export interface User {
      uid: string;
      email: string;
 
     userName?:string;
      photoURL?: string;
      displayName?: string;
      firstName?: string;
      lastName?: string;
      phone?:string;
      address?:string;
      roles: Roles;
    }