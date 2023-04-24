import { SmlUserDetails } from "./sml-user-details";

export interface SmlUserDetailsWithToken{
    smlUserDetails : SmlUserDetails;
    jwtTokenCustomized : String;
}