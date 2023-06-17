import { useFirebaseStore } from '../store/firebase';
import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import useStorage from '../hooks/useStorage';

export default function useAuthentication() {
  return {
    beforeEnter: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      const { localStorage } = useStorage();
      const firebaseStore = useFirebaseStore();
      // 判断当前是否已经登录过
      // path: '/' 是否已经登录
      console.log(to, from, next);
      const id = to.params.id;
      const isRegister = firebaseStore.isRegister;

      if (id === firebaseStore.certificate && !isRegister) {
        localStorage.setItem<boolean>('isRegister', true);
        next('/');
      } else if (isRegister) {
        next('/');
      } else {
        // 未登录直接访问借口
        next('/auth/login');
      }
    },
  };
}
