<template>
  <div class="reddit">
    <h1>{{ msg }}</h1>
    <h2>Interesting Subreddits</h2>
    <div class="container">
            <subreddit name="aww"></subreddit>
            <subreddit name="space"></subreddit>
            <subreddit name="gifs"></subreddit>
            <subreddit name="food"></subreddit>
            <subreddit name="comics"></subreddit>
            <subreddit name="sports"></subreddit>
    </div>
  </div>
</template>

<script>
import subreddit from './subreddit'
export default {
  name: 'reddit',
  data () {
    return {
      msg: 'Welcome to Reddit App'
    }
  },
  components: {
    subreddit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

a{
    text-decoration: none;
}

a:hover{
    text-decoration: underline;
}

html{
    font: normal 16px sans-serif;
    color: #333;
    background-color: #f9f9f9;
}

.container{
    padding: 27px 20px;
    margin: 30px auto 50px;
    max-width: 1250px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: #fff;
    box-shadow: 0 0 1px #ccc;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
