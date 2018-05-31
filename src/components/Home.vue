<template>
  <div>
    <p v-text="heading"> </p>
    <span v-html='htmlHeading'></span>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data() {
      return {
        heading: "HomePage Heading",
        htmlHeading : "<h2> Hey Man</h2>",
      }
    }
  }
</script>
