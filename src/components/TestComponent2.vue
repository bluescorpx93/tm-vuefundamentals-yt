<template>
  <div>
    <div>
      <h2> 2nd test component</h2>
      <p> with my template variable <strong>  {{ msg }} </strong></p>
    </div>
    <hr />

    <div>
      <span> Iterate through Objects</span>
      <div v-for="person in people">
        <ul>
           <li> {{ person.id}}</li>
           <li> {{ person.name}}</li>
           <li> {{ person.location}}</li>
        </ul>
      </div>
    </div>
    <hr />

    <div>
      <p> Compute Functions</p>
      <p> This shows <strong> {{staticPerson.name }} </strong> and <strong> {{staticPerson.location }}</strong></p>
      <p> This is computed: <strong> {{ fullInfo }}</strong></p>
    </div>
    <hr />

    <div>
      <p> Bind Data</p>
      <label> Name </label>
      <input type='text' v-model="staticPerson.name"  />
      <br />
      <label> Location</label>
      <input type='text' v-model="staticPerson.location" />
    </div>
    <hr />

  </div>
</template>

<script>
export default {
  name: 'TestComponent2',
  data() {
    return {
      msg: 'yahoo',
      people: [
        {
          id: 1,
          name: "John Myer",
          location: "USA"
        },
        {
          id: 2,
          name: "Eric Lancer",
          location : "Birds"
        },
        {
          id: 3,
          name: "Ronald",
          location: "Japan"
        }
      ],
      staticPerson: {
        name: "Jone",
        location: "Dalas"
      }
    }
  },
  computed: {
    fullInfo : function(){
      return this.staticPerson.name + ' ' + this.staticPerson.location
    }
  }
}
</script>
