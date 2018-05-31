<template>
<div>
  <h4> Users Component</h4>

  <div>
    <p> Create New User</p>
    <form v-on:submit="addUser">
      <div>
        <label> Name</label>
        <input type='text' v-model="newUser.name" placeholder='Mike Tom' />
      </div>
      <div>
        <label> Email</label>
        <input type='text' v-model="newUser.email" placeholder='myname@example.com' />
      </div>
      <div>
        <label> Location</label>
        <input type='text' v-model="newUser.location" placeholder='myname@example.com' />
      </div>
      <div>
        <input type='submit' value='Create' />
      </div>
    </form>
  </div>
  <hr />

  <div>
    <div v-for="person in people">
      <h3 v-bind:class="{contactedClass: person.contacted}"> Name: {{ person.name }} </h3>
      <p> Location: {{ person.location}}, Email: {{ person.email}} </p>
      <p> Contacted: {{ person.contacted}}</p>

      <hr/>
      <span> Contact User ? </span>
      <input type='checkbox' class='toggle' v-model="person.contacted" />
      <button v-on:click="deletePerson(person)"> Remove </button>
    </div>
  </div>

</div>
</template>


<script>
export default {
  name: "UsersComponent",
  data() {
    return {
      people: [{
          name: "John Myer",
          email: 'john@myer.com',
          location: "USA",
          contacted: false
        },
        {
          name: "Eric Lancer",
          email: 'eric@myer.com',
          location: "Birds",
          contacted: false
        },
        {
          name: "Ronald",
          email: 'ron@myer.com',
          location: "Japan",
          contacted: false
        }
      ],
      newUser : {
        name : "",
        email: "",
        location: "",
        contacted : ""
      }
    }
  },
  methods: {
    addUser: function(e){
      e.preventDefault();
      var newperson = {
        name : this.newUser.name,
        email: this.newUser.email,
        location : this.newUser.location,
        contacted: false
      };
      this.people.push(newperson);
      console.log("Form Submitted");
    },
    deletePerson: function(person){
      this.people.splice(this.people.indexOf(person, 1));
    }
  }
}
</script>

<style scoped>
  .contactedClass{
    text-decoration: line-through;
  }
</style>
