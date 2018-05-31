<template>
  <div>
    <p v-if="showNavText"> THIS IS THE NAV SECTION</p>
    <p v-else="showNavText"> show something else here</p>
    <ul>
      <li>
        <router-link to='/'> Home </router-link>
      </li>
      <li>
        <router-link to='/test1'> TestComponent1 </router-link>
      </li>
      <li>
        <router-link to='/test2'> TestComponent2 </router-link>
      </li>
      <li>
        <router-link to='/test3'> TestComponent3 </router-link>
      </li>
      <li>
        <router-link to='/users'> Users </router-link>
      </li>
      <li>
        <router-link to='/users_api'> Users API </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  name: "NavComponent",
  data() {
    return {
      showNavText: true
    }
  }
}
</script>
