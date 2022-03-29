<template>
  <button @click="loading">FavIcon</button>

  <div>
    <input v-model="title" type="text" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="(todo, i) in todos" :key="todo.title">
          <input v-model="todo.done" type="checkbox" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, i)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input v-model="allDone" type="checkbox" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>

  <transition name="modal">
    <div v-if="showModal" class="info-wrapper">
      <div class="info">哥，你啥也没输入！</div>
    </div>
  </transition>
</template>
<script setup>
import { useTodos } from "../utils/useTodos";
import { useStorage } from "../utils/useStorage";
import { ref, watchEffect, computed } from "vue";

let { title, todos, clear, active, all, allDone } = useTodos();
// addTodo, 
// let todos = useStorage('todos', [])

//Favicon
import useFavicon from "../utils/useFavicon";
let { favicon } = useFavicon()

function loading() {
  favicon.value = "/geek.ico"
}

let showModal = ref(false)

function addTodo() {
  if (!title.value) {
    showModal.value = true
    setTimeout(() => {
      showModal.value = false
    }, 1500)

    return
  }
  todos.value.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

function removeTodo(e, i) {
  todos.value.splice(i, 1)
}

</script> 
<style>
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-enter-active {
  transition: all 0.3s ease;
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.modal-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

