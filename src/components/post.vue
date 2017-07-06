<template id="post">
  <div class="post">
      <a :href="item.data.url" :style="getImageBackgroundCSS(item.data.thumbnail)" target="_blank" class="thumbnail"></a>

      <div class="details">

          <a :href="item.data.url" :title="item.data.title" target="_blank" class="title">
              {{ item.data.title | truncate}}
          </a>

          <div class="action-buttons">
              <a :href="'http://reddit.com' + item.data.permalink " title="Vote">
                  <i class="material-icons">thumbs_up_down</i>
                  {{item.data.score}}
              </a>

              <a :href="'http://reddit.com' + item.data.permalink " title="Go to discussion">
                  <i class="material-icons">forum</i>
                  {{item.data.num_comments}}
              </a>
          </div>

      </div>
  </div>
</template>

<script>
// Child | Component representing a single post.
export default {
  name: 'post',
  props: ['item'],
  methods: {
    getImageBackgroundCSS: function (img) {
      if (img && img !== 'self' && img !== 'nsfw') {
        return 'background-image: url(' + img + ')'
      } else {
        return 'background-image: url(assets/img/placeholder.png)'
      }
    }
  },
  filters: {
    truncate: function (value) {
      var length = 60

      if (value.length <= length) {
        return value
      } else {
        return value.substring(0, length) + '...'
      }
    }
  }
}
</script>

<style>
.post{
    display: flex;
}

.post .thumbnail{
    display: block;
    flex: 0 0 60px;
    height: 60px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    border-radius: 4px;
    margin-right: 12px;
}

.post .details{
    display: flex;
    flex-direction: column;
}

.post .details .title{
    font-size: 15px;
    margin-bottom: 3px;
    color: #04477b;
}

.post .details .title:visited{
    color: purple;
}

.post .details .action-buttons a{
    font-size: 11px;
    margin-right: 4px;
    display: inline-block;
    color: #666;
}

.post .details .action-buttons i{
    font-size: 10px;
    margin-right: 1px;
}

@media(max-width: 1250px){

    .container{
        justify-content: center;
        margin: 30px 30px 50px 30px;
    }
}

@media(max-width: 500px){

    .subreddit{
        min-width: 300px;
        padding: 20px 15px;
    }
}
</style>
