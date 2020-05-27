<template>
  <div>
    <!-- Page Header -->
    <header class="masthead" style="background-image: url('https://blackrockdigital.github.io/startbootstrap-clean-blog/img/home-bg.jpg')">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview">
            <router-link to="post.html">
              <h2 class="post-title">
                Man must explore, and this is exploration at its greatest
              </h2>
              <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3>
            </router-link>
            <p class="post-meta">Posted by
              <router-link to="#">Start Bootstrap</router-link>
              on September 24, 2019</p>
          </div>
          <hr>
          <div class="post-preview">
            <router-link to="post.html">
              <h2 class="post-title">
                I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
            </router-link>
            <p class="post-meta">Posted by
              <router-link to="#">Start Bootstrap</router-link>
              on September 18, 2019</p>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <!-- Footer -->
    
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "お知らせ",
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  /* a {
    color: #212529;
    transition: all 0.2s;
  }

  #mainNav {
    position: absolute;
    border-bottom: 1px solid #e9ecef;
    background-color: white;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  } */

  header.masthead {
    margin-bottom: 50px;
    background: no-repeat center center;
    background-color: #868e96;
    background-attachment: scroll;
    position: relative;
    background-size: cover;
    text-align: center;
    padding: 200px 0 150px;
    color: white;
  }

  header.masthead .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #212529;
    opacity: 0.5;
  }

  /* footer {
    padding: 50px 0 65px;
    text-align: center;
  } */
</style>