# Disney+ Clone w/ Tailwind

> Clone Disney+ avec Tailwind CSS et Vue.js. Nous nous concentrons sur la mise en page de base et utilisons le schéma de couleurs par défaut de Tailwind.
 
<br>

## Tech Stack

**Client :**  Vue, Vue-Router, VueX, TailwindCSS

```bash
- yarn install
- yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- tailwind.config.js > content : './index.html', './src/**/*{vue,js,ts,jsx,tsx}'
- touch src/index.css :<br>
  @tailwind base; <br>
  @tailwind components; <br>
  @tailwind utilities;
- main.js : import "./index.css"
- npm i vue-router@4
- npm i vue@next -D
- yarn run dev
```