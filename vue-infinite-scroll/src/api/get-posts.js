var names = ['Xavi Hernandez', 'Dani Alves', 'Andrès Iniesta', 'Thierry Henry'];
// utilisé pour générer des articles

const getPosts = number => {
  // générer un certain nombre de messages
  
  let ret = []

  for (let index = 0; index < number; index++) {
    ret.push({
      author: names[index % names.length],
      content: 'Objectively seize top-line collaboration and idea-sharing via magnetic.'
    })
  }

  return ret
}

export default getPosts