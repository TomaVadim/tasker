import { Profile as DefaultProfile } from "next-auth";

declare module "next-auth" {
  interface Profile extends DefaultProfile {
    picture: string;
  }
}
