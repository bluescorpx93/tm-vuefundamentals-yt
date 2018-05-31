<template>
<div>
  <h4> Users From API Component</h4>
  <div v-for="user in users">
    <h3> {{ user.name}}</h3>
    <p> UserName: {{ user.username}} with Phone: {{ user.phone}} and Email: {{user.email}}</p>
    <p> Location: {{user.address.suit}} {{ user.address.street}} {{ user.address.city}} </p>
  </div>
</div>
</template>


<script>
export default{
  name: "UserFromAPIComponent",
  data(){
    return {
      users: []
    }
  },
  created : function(){
    var endpoint = 'https://jsonplaceholder.typicode.com/users';

    this.$http.get(endpoint)
    .then( res => {
      this.users = res.body;
      // console.log(res.body);
    })
  }

}
</script>
