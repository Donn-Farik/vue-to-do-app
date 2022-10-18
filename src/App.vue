<script setup>
import { computed, onMounted, ref } from "vue";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

const todos = ref([]);

const newTodoContent = ref("");
const addTodo = () => {
  todos.value.push({
    id: Math.floor(Math.random() * 100),
    content: newTodoContent.value,
    done: false,
  });
  newTodoContent.value = "";
};

const handleDelete = (index) => {
  todos.value.splice(index, 1);
};
const toggleStyle = (todo) => {
  todo.done = !todo.done;
};
</script>

<template>
  <div class="badass-todo">
    <div class="title has-text-center">What is your plan?</div>
    <!-- form -->
    <form action="submit" @submit.prevent="addTodo">
      <div class="field is-grouped mb-5">
        <p class="control is-expanded">
          <input
            class="input"
            type="text"
            placeholder="Find a repository"
            v-model="newTodoContent"
          />
        </p>
        <p class="control">
          <button class="button is-info" :disabled="!newTodoContent">
            Add
          </button>
        </p>
      </div>
    </form>
    <!-- todo list -->
    <div
      v-for="(todo, index) in todos"
      :key="todo.id"
      class="card mb-5"
      :class="{ getColor: todo.done }"
    >
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentred">
            <div class="column">
              <div :class="{ done: todo.done }">{{ todo.content }}</div>
            </div>
            <div class="column is-5">
              <button class="button is-light" @click="toggleStyle(todo)">
                &check;
              </button>
              <button
                class="button is-danger ml-2"
                @click="handleDelete(index)"
              >
                &cross;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "bulma\css\bulma.min.css";
.badass-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
.done {
  text-decoration-line: line-through;
}
.getColor {
  background-color: hsl(171, 100%, 41%);
}
</style>
