import {
  GithubAuthProvider,
  getAuth,
  onAuthStateChanged,
  AuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { defineStore } from 'pinia';

export const useFirebaseStore = defineStore('firebase', () => {
  const auth = getAuth();

  async function loginWithFirebase(provider: AuthProvider, name: string) {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log('登陆成功');
    } catch {
      console.log('登陆失败');
    }
  }

  return {
    loginWithFirebase,
  };
});
