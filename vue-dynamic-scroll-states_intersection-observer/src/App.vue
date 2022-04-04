<script setup>
  import { ref, onMounted } from 'vue'

  const headers = [
    'Section 1',
    'Section 2',
    'Section 3',
    'Section 4',
    'Section 5',
  ];

  const currentSection = ref('');

  onMounted(() => {
    const observer = new IntersectionObserver( entries => {
      entries.forEach( entry =>{
        const { target } = entry;
        if(entry.intersectionRatio > 0) {
          currentSection.value = target.getAttribute('id');
        }
      })
    }, {
      rootMargin: '0px 0px -90% 0px'
    })

    document.querySelectorAll('article h2').forEach( section => {
      observer.observe(section);
    })
  });
</script>

<template>
  <main>
    <article>
      <h1>My Article</h1>
      <section v-for="(header, index) in headers" :key="index">
          <h2 :id="index">{{ header }}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error soluta sunt dicta nam? Delectus, provident voluptatem officiis reiciendis hic sequi consequuntur, porro assumenda et esse ex blanditiis velit cumque amet dicta non nulla aperiam debitis repellat magnam eaque eos similique. Placeat sapiente in explicabo ea minus tenetur inventore doloremque dolorum vero sunt distinctio, voluptatum tempore, totam alias officiis, necessitatibus quibusdam voluptatem doloribus eveniet? Sint illum cumque quasi consectetur, error rerum esse unde dignissimos ipsam porro praesentium provident pariatur, amet atque a optio maiores. Quae earum delectus, dolorum voluptas ipsa necessitatibus tempore adipisci cupiditate. Sapiente nobis aliquid totam aliquam, quaerat doloremque sint magni vero ratione porro qui ab veniam! Eos, culpa minima error unde nam quaerat dolorum? Nostrum, quibusdam mollitia, a quo eligendi neque, incidunt dignissimos debitis porro commodi suscipit ratione qui esse deleniti repellat aut sunt corporis quis excepturi quia eius asperiores at. Mollitia perspiciatis, sapiente, ipsam veritatis quos cupiditate culpa beatae nam repellendus, vel animi odit quidem autem ut laborum minus quam asperiores voluptatibus sequi ipsa officiis. Sed aut corrupti est ab, explicabo molestiae animi accusantium ipsum quasi. Ullam quidem neque amet atque, hic voluptates fuga porro! Mollitia dolor necessitatibus suscipit numquam sint error porro vitae molestias explicabo, nobis id rerum odio ipsum? Officia autem iusto maxime possimus enim dolor rem qui eveniet ab veritatis nobis eligendi omnis id ad eius itaque, quo dicta voluptatem ullam. Dicta nisi modi beatae aliquid, voluptatibus aut aliquam ipsa quod libero nostrum omnis ullam assumenda repellendus expedita accusantium ratione exercitationem, sapiente labore eveniet alias, iusto ducimus explicabo! Cumque quis odio nostrum nihil quae nam temporibus. Veniam eveniet et architecto nesciunt libero magni nulla, cumque soluta quia quisquam, laborum sit consectetur. Neque omnis, aspernatur recusandae ratione numquam quos velit facere cupiditate? Obcaecati aspernatur dignissimos quas nihil quia aliquid harum libero sint laudantium. Nemo!
          </p>
      </section>
    </article>
    <aside>
      <div>
        {{ currentSection }}
        <a 
          v-for="(header, index) in headers" 
          :key="index" 
          :href="`#${index}`"
          :class="{ active : currentSection == index }">
         {{ header }}
        </a>
      </div>
    </aside>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 80%;
  margin: 0 auto;
}

main {
  display: flex;
}

article {
  width: 75%;
  margin-bottom: 500px;
}

aside {
  width: 25%;
}

aside > div {
  position: sticky;
  top: 20px;
  padding-left: 2em;
}

aside > div > a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  border-left: 1px solid #ccc;
  padding-left: 2em;
}

aside a.active {
  font-weight: bold;
  border-color: #2c3e50;
}
</style>
