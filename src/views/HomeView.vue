<template>
  <div class="home">
    <h1>Mis recetas</h1>
    <button @click="togglePopup">Agregar nueva receta</button>
    <div class="recipes">
      <!--recorre el array del estado-->
      <div class="card" v-for="recipe in $store.state.recipes" :key="recipe.id">
        <h2>{{ recipe.title }}</h2>
        <p>{{ recipe.description }}</p>
        <router-link :to="`/recipe/${recipe.title}`">
          <button>View Recipe</button>
        </router-link>
      </div>
    </div>

    <!--**MODAL DE REGISTRO**-->
    <div class="add-recipe-popup" v-if="popupOpen">
      <div class="popup-content">
        <h2>Agregar nueva receta</h2>
        <!--formulario-->
        <form @submit.prevent="addNewRecipe">
          <!--titulo-->
          <div class="group">
            <label>Titulo</label>
            <input type="text" v-model="newRecipe.title">
          </div>
          <!--descripcion-->
          <div class="group">
            <label>Descripcion</label>
            <textarea v-model="newRecipe.description"></textarea>
          </div>
          <!--ingredientes-->
          <div class="group">
            <label>Ingredientes</label>
            <div class="ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
              <input type="text" v-model="newRecipe.ingredients[i - 1]">
            </div>
            <button type="button" @click="addNewIngredient">Agregar (+)</button>
          </div>
          <!--pasos-->
          <div class="group">
            <label>Pasos</label>
            <div class="method" v-for="i in newRecipe.methodRows" :key="i">
              <textarea v-model="newRecipe.method[i - 1]"></textarea>
            </div>
            <button type="button" @click="addNewStep">Agregar (+)</button>
          </div>
          <button type="submit">Agregar 👍</button>
          <button @click="togglePopup" type="button">Cerrar ❌</button>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HomeView',
  setup() {
    const newRecipe = ref({ //referencia a el objecto receta
      //id: '',
      title: '',
      description: '',
      ingredients: [],
      method: [],
      ingredientRows: 1,
      methodRows: 1
    })
    const popupOpen = ref(false) //referencia a activar el popup
    //toggle que maneja el modal
    const togglePopup = () => {
      popupOpen.value = !popupOpen.value; //modifica el valor de popup, negandolo
    }
    //usa el store
    const store = useStore();
    //aumenta la cantidad de ingredientes en la receta
    const addNewIngredient = () => {
      newRecipe.value.ingredientRows++ //aumenta la cantidad de ingredientes
    }
    //aumenta la cantidad de pasos en la receta
    const addNewStep = () => {
      newRecipe.value.methodRows++ //aumenta la cantidad de pasos en el methodo de preparacion
    }
    //agrega el ingrediente al array de state
    const addNewRecipe = () => {
      newRecipe.value.title = newRecipe.value.title.toLowerCase().replace(/\s/g, '-')

      if (newRecipe.value.title === '') {
        alert("Por favor introduzca un titulo")
        return
      }
      togglePopup()
      //utiliza la mutacion del store
      store.commit('ADD_RECIPE', { ...newRecipe.value })
      newRecipe.value = {
        //id: '',
        title: '',
        description: '',
        ingredients: [],
        method: [],
        ingredientRows: 1,
        methodRows: 1
      }
    }
    return {
      newRecipe, togglePopup, popupOpen, addNewIngredient, addNewStep, addNewRecipe
    }
  }
}
</script>

<style>
.home {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 32px;
}

.recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit(), minmax(300px, 1fr));
}

.recipes .card {
  padding: 1rem;
  border-radius: 5px;
  margin: 1rem;
  background-color: #081c33;
}

.recipes .card p {
  font-size: 1.125rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.add-recipe-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-recipe-popup .popup-content {
  background-color: #081c33;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 768px;
}

.popup-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.popup-content .group {
  margin-bottom: 1rem;
}

.popup-content .group label {
  display: block;
  margin-bottom: 0.5rem;
}

.popup-content .group input,
.popup-content .group textarea {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}

.popup-content .group textarea {
  height: 50px;
  resize: none;
}

.popup-content button[type="submit"] {
  margin-right: 1rem;
}
</style>
