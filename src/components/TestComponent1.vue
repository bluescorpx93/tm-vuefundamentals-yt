<template>
  <div>
    <h2> My test component 1 </h2>
    <p> with my template variable <strong>  {{ msg }} </strong></p>
    <hr />

    <div>
      <label> Bind Data</label>
      <input type='text' v-model="msg"  />
    </div>
    <hr />

    <div>
      <span> Function with click event on button</span>
      <button v-on:click="greet(msg)"> Do Sth</button>
    </div>
    <hr />

    <div>
      <label> Function with keyup event on input </label>
      <input type='text' v-on:keyup="pressKey" v-on:keyup.enter="enterWasPressed"/>
    </div>
    <hr />

    <TestComponent3 passedMsg="Rendering Prop Message from parent Component supposedly"></TestComponent3>
    <hr />
    
  </div>
</template>

<script>
import TestComponent3 from '@/components/TestComponent3'
export default {
  name: 'TestComponent1',
  components : {
    TestComponent3
  },
  data() {
    return {
      msg: 'woo hoo this works!'
    }
  },
  methods: {
    greet: function(msgText){
      console.log("greet function working: ", msgText);
    },
    pressKey: function(e){
      console.log("key was pressed: \n", e.target.value);
    },
    enterWasPressed: function(){
      console.log("Enter Key was pressed");
    }
  }
}
</script>
