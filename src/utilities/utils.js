export const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const encryptData = (name, data, expriyTime) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  saveCookie(name, encrypted, expriyTime ? expriyTime : 5);
};

export const compareDate = (currentDate, oldDate) => {
  if (currentDate.getTime() < oldDate.getTime()) return true;
  else if (currentDate.getTime() > oldDate.getTime()) return false;
};

export const deleteCookies = () => {
  const allCookies = document.cookie.split(";");

  for (let i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
};

export const getCookieData = (cookieName) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${cookieName}=`))
    ?.split("=")[1];
};

export const getItem = (itemname) => {
  return localStorage.getItem(itemname);
};
export const setItem = (itemname, item) => {
  localStorage.setItem(itemname, item);
};
export const removeItem = (itemname) => {
  localStorage.removeItem(itemname);
};
export const removeAllItems = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  localStorage.removeItem("refreshToken");
  logoutSuccessMsg("Logout Successfully");
};

export const showBootstrapModal = (elementId) => {
  const windowObj = window;
  const bootstrap = windowObj.bootstrap;
  const bootstrapModal = new bootstrap.Modal(`#${elementId}`);
  bootstrapModal.show();
};

export const hideBootstrapModal = (elementId) => {
  const modalElement = document.getElementById(elementId);
  const windowObj = window;
  const modalInstance =
    windowObj.bootstrap.Modal.getOrCreateInstance(modalElement);
  let bootstrapModal = bootstrap.Modal.getOrCreateInstance(modalElement);
  modalInstance.hide();
  bootstrapModal.hide();
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const successMsg = (message) => {  
};
export const errorMsg = (message, isAccessMessage) => {  
};
export const logoutSuccessMsg = (message) => { 
};
