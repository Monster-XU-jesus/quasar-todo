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

export const useFirebaseStore = defineStore('firebase', () => {
  const auth = getAuth();
  let changed = false;

  async function loginWithFirebase(provider: AuthProvider, name: string) {
    try {
      await auth.setPersistence(browserSessionPersistence);
      const result = await signInWithRedirect(auth, provider);
      changed = true;
      console.log(result);
    } catch (error) {
      console.log('登陆失败: ', error);
    }
  }

  return {
    loginWithFirebase,
    changed,
  };
});
