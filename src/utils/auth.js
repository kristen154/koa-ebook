import {storageKey} from '@/const.js'
export function getToken(){
	return localStorage.getItem(storageKey);
}
export function setToken(token){
	localStorage.setItem(storageKey,token)
}

export function removeToken(){
	localStorage.removeItem(storageKey)
}
/*export function getToken(){
	return sessionStorage.getItem(storageKey);
}
export function setToken(token){
	sessionStorage.setItem(storageKey,token)
}

export function removeToken(){
	sessionStorage.removeItem(storageKey)
}*/