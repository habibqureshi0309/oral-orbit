import config from "@/config/index"

export const user = null

export const getUserToken = () => {
  return localStorage.getItem('token')
}

export const getPageTitle = () => {
  return localStorage.getItem('pageTitle')
}

export const getUser = () => {
  let user = localStorage.getItem('user')
  return user && JSON.parse(user)
}

export const setPageTitle = (title) => {
  localStorage.setItem('pageTitle', title)
}
export const setUserToken = (token) => {
  localStorage.setItem('token', token)
}

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeUserToken = () => {
  localStorage.removeItem('token')
}

export const removePageTitle = () => {
  localStorage.removeItem('pageTitle')
}

export const removeUser = () => {
  localStorage.removeItem('user')
}

export const removeAuth = () => {
  removeUserToken()
  removeUser()
}

export const checkPermission = (user, permission) => {
  return (
    (
      (user &&
        user.Role &&
        user.Role.PermissionAccesses.find(
          (permissionAccess) => permissionAccess?.Permission?.type === permission
        )) ||
      (user &&
        user.GroupAccesses &&
        user.GroupAccesses.find(
          (permissionAccess) => permissionAccess?.Permission?.type === permission
        ))
    ) && !isForceUpdatePassword(user)
  )
}

export const isForceUpdatePassword = (user) => {
  return Boolean(user?.changePasswordRequired);
}

export const isOwareSubdomain = () => {
  const host = window.location.host
  const subdomain = host.split('.')[0]
  return subdomain === "coc"
}

export const isOwareSuperAdmin = (user) => isOwareSubdomain() && user?.Role?.type === 'SUPER_ADMIN'