# Vue 3 + Vite

La validation de formulaire Vue est une partie essentielle de tout système de formulaire.

il faut s'assurer que les utilisateurs ont un mot de passe fort ou de vérifier qu'un message n'est pas trop long, la validation des entrées est partout dans les applications Web.

Pour développeurs de Vue, la bibliothèque Vuelidate fait le gros du travail pour nous.
Pas besoin d'écrire des centaines de conditions pour vérifier nos entrées.

## Setup Tailwind in a Vue 3

- npm init vite
- project name : ...
- select a framework : ...
- cd folder
- yarn install
- yarn install -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- tailwind.config.js > content : './index.html', './src/**/*{vue,js,ts,jsx,tsx}
- touch src/index.css : ` @tailwind base; @tailwind components; @tailwind utilities;`
- main.js : import "./index.css"
- yarn run dev
