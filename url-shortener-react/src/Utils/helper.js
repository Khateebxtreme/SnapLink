//for dealing with Routes -> which router to use (shortdomain or app router)

import { shortdomainList } from "./constant"

export const getApps = ()=> {
  const subdomain = getSubDomain(window.location.hostname)
  console.log(subdomain)

  const mainApp = shortdomainList.find((app)=>app.main)
  if(subdomain === "")return mainApp.app

  const apps = shortdomainList.find((app)=>subdomain === app.subdomain)

  return apps ? apps.app : mainApp.app;
}

//url.localhost
//url.snaplink.com
export const getSubDomain = (location) => {
  const locationParts = location.split(".")
  const isLocalhost = locationParts.slice(-1)[0] === "localhost"
  const sliceTill = isLocalhost? -1 : -2;
  return locationParts.slice(0, sliceTill).join("")
}