<template>
  <div class="recipe">
    <router-link to="/" class="go-back"><!--&lt;=--> ⬅ Regresar</router-link>
    <h1> {{ recipe.title }}</h1>
    <p class="desc">{{ recipe.description }}</p>
    <hr>
    <div class="ingredients">
      <h3>Ingredientes</h3>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
      </ul>
    </div>
    <div class="method">
      <h3>Pasos</h3>
      <ol>
        <li v-for="(step, index) in recipe.instructions" :key="index"> <span
            v-html="cleanText(step)"></span><!--{{ step }}-->
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
//option API
export default {
  computed: {
    recipe() {
      return this.$store.state.recipes.find(recipe => recipe.title === this.$route.params.title)
    }
  },
  methods: {
    cleanText(text) {
      return text.replace(/\n/g, '<br />')
    }
  }
}

</script>

<style>
.recipe {
  padding: 1rem;
  max-width: 768px;
  margin: 0 auto;
}

.description {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

hr {
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

h3 {
  margin-bottom: 1rem;
}

.ingredients {
  padding: 1rem;
  background-color: #081c33;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.ingredients ul li {
  list-style-position: inside;
  line-height: 1.4;
  margin-bottom: 1rem;
}


.method ol li {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  list-style-position: inside;
  border-bottom: 1px solid #eee;
}

.go-back {
  float: right;
}

.go-back:hover{
  color: white;
}

h1 {
  margin-top: 1rem;
}


</style>