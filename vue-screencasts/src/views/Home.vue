<template>
  <div class="home">
    <h1>Videos</h1>
    <section class="component-videos">

      <div class="component-videos__container">
        <article class="component-videos__card"
             v-for="(video, i) in videos"
             :key="i">
             <figure>
               <picture class="component-videos__wrap-image">
                 <img :src="video.thumbnail" alt="">
               </picture>
             </figure>
            <h3>{{ video.name }}</h3>
            <div v-html="video.description"></div>
        </article>
      </div>
      
    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    
  },
  data() {
    return {

      videos: [
        {
          name: "ES2015 Arrow Functions",
          description: `<p>ES2015 (aka ES6) has some great ways to make your code easier to write and understand. In this episode, we cover two different ways that you can make your code clearer by removing the 'function' keyword.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Arrow+Function.png',
        },
        {
          name: "ES2015 Template Strings",
          description: `<p>Template strings are an incredibly useful new feature in ES2015... and you can use them in your Ember apps today!</p>
                        <p>Here are 3 cool things that template strings enable.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Template+Strings.png',
        },
        {
          name: "ES2015 Modules",
          description: `<p>Before modules, javascript code loading was a mess. Now it's pretty amazing.</p>
                        <p>Learn about ES2015 modules and how they work together with ember-cli.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+ES2015+Modules.png',
        },
        {
          name: "Promise Basics",
          description: `<p>Promises are a tool for handling asynchronous communication, and they are commonly used in Ember applications. They’re even built in to Ember Data, route handling, and other parts of the Ember source.</p>
                        <p>This episode introduces the then, catch, and finally blocks, how to chain them together, and how to use them with either named or anonymous functions.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Promise+Basics.png',
        },
        {
          name: "Creating New Promises",
          description: `<p>Sometimes you want to start a new promise chain or have greater control over the timing of events. By manually creating a promise, you can do that.</p>
                        <p>In this video we cover creating a new promise and resolving or rejecting the promise. We use two examples- a custom AJAX login and an Ember Data findAll request.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Creating+New+Promises.png',
        },
        {
          name: "Multiple Concurrent Promises",
          description: `<p>Sometimes promises have to happen in an exact order, but often there will be several calls that can be made concurrently. RSVP’s Promise implementation allows that.</p>
                        <p>In this video we show how to use the hash method, one of several methods available to do concurrent promises.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Multiple+Concurrent+Promises.png',
        },
        {
          name: "ES2015 Destructuring",
          description: `<p>Destructuring is really cool, can save you code, and you’re probably already using a small portion of its power.</p>
                        <p>Learn more about this cool new ES2015/ES6 feature, including how to destructure deeply nested objects, how to use it with Ember’s import statement, and how to use it with arrays.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Destructuring.png',
        },
        {
          name: "ES2016 Decorators",
          description: `<p>Decorators let you easily and repeatedly add functionality to existing functions.</p>
                        <p>In this episode we go over how to use and create decorators, creating two useful decorators that demonstrate different parts of the API.</p>`,
          thumbnail: 'https://vue-screencasts.s3.us-east-2.amazonaws.com/images/video-thumbnails/Thumbnail+-+Decorators.png',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

figure {
    margin: 0;
    overflow: hidden;
    position: relative;
}

@mixin aspect-ratio($width, $height, $displayType: block, $important:false) {

  display: $displayType;
  position: relative;
  height: 0;

  @if $important {
    padding-top: ($height / $width) * 100% !important;
  }
  @else {
    padding-top: ($height / $width) * 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

  .component-videos {

    &__container {
      max-width: 80%;
      margin-left: auto;
      margin-right: auto;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    &__card {
      flex-basis: calc((100% - 2 * 20px)/3);
      font-size: .8125em;
      margin-top: 20px;
      position: relative;
      overflow: hidden;

      &:not(:nth-child(3n-2)) {
        margin-left: 20px;
      }
    }

    &__wrap-image {
       @include aspect-ratio(16, 9);
    }
  }
</style>