<template>
  <ul id="users">
    <li class="user" v-for="user in $store.getters.users" v-bind:key="user.id">
      <div class="id">
        ID: <span>{{ user.id }}</span>
      </div>
      <div class="name">
        Name: <span>{{ user.name }}</span>
      </div>
      <div class="username">
        Username: <span>{{ user.username }}</span>
      </div>
      <div class="email">
        E-Mail: <span>{{ user.email }}</span>
      </div>
      <div class="website">
        Website: <span>{{ user.website }}</span>
      </div>
    </li>
  </ul>
</template>