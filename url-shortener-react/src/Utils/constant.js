import AppRouter, { ShortDomainRouter } from "../AppRouter";

export const shortdomainList = [
  { subdomain : "www", app: AppRouter, main : true},
  { subdomain : "url", app: ShortDomainRouter, main : false }
]