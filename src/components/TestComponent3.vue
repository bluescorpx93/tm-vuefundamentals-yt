<template>
  <div>
    <h3> {{ pageHeading}} </h3>
    <p> Check props & prop values</p>
    <h3> {{ passedMsg }}</h3>
  </div>
</template>
<script>
  export default {
    name : "TestComponent3",
    data() {
      return {
        pageHeading: "Test Component 3"
      }
    },
    props: {
      passedMsg : {
        default : "Default Msg in Prop",
        type: String
      }
    },
  }
</script>
