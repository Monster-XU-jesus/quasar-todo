import {
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  AuthProvider,
  signInWithPopup,
  getRedirectResult,
  signInWithRedirect,
  browserSessionPersistence,
} from 'firebase/auth';
import { defineStore } from 'pinia';
import useStorage from '../hooks/useStorage';

const { localStorage } = useStorage();

export const useFirebaseStore = defineStore('firebase', () => {
  const auth = getAuth();
  const isRegister = localStorage.getItem<boolean>('isRegister') ? true : false; // 是否登录过
  const certificate = 'github'; // 登录成功后的凭证

  async function loginWithFirebase(provider: AuthProvider, name: string) {
    try {
      await auth.setPersistence(browserSessionPersistence);
      const result = await signInWithRedirect(auth, provider);
      console.log(result);
    } catch (error) {
      console.log('登陆失败: ', error);
    }
  }

  return {
    loginWithFirebase,
    isRegister,
    certificate,
  };
});
