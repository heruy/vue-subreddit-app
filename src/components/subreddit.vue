<template id="subreddit">
  <div class="subreddit">
      <h2>{{ name | uppercase }}</h2>
      <!-- <h2>{{ posts }}</h2> -->
      <ul class="item-list">
          <li v-for="obj in posts">
              <post :item="obj"></post>
          </li>
      </ul>
  </div>
</template>

<script>
import post from './post'
import axios from 'axios'

export default {
  name: 'subreddit',
  props: ['name'],

  data: function () {
    return { posts: [] }
  },

  created: function () {
    axios.get('https://www.reddit.com/r/' + this.name + '/top.json?limit=5')
    .then((response) => {
      this.posts = response.data.data.children
    })
  },

  components: {
    post
  },

  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  }
}
</script>

<style>
.subreddit{
    flex: 0 0 33%;
    min-width: 400px;
    padding: 20px 42px;
}

.subreddit h2{
    font-size: 18px;
    margin-bottom: 10px;
}

.subreddit .item-list{
    border-top: 1px solid #bec9d0;
    padding-top: 20px;
    list-style: none;
}

.subreddit .item-list li{
    margin-bottom: 17px;
}
</style>
