import { ref, watchEffect } from "vue";

export function useStorage(name, value = []) {
  let data = ref(JSON.parse(localStorage.getItem(name) || '[]'));
  watchEffect(() => {
    localStorage.setItem(name, JSON.stringify(data.value));
  });
  return data;
}
