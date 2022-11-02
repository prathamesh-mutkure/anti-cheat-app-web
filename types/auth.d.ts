import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    fname: string;
    lname: string;
    token: string;
  }
}
