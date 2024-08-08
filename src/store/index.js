import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes:
      [{
        //id: 1,
        title: 'Sopa Paraguaya',
        description: 'Aprende a preparar esta receta de Sopa Paraguaya, por Marcela Lovegrove en elGourmet',
        ingredients: ['Leche 500 cc', 'Aceite neutro 500 cc', 'Huevos 6 Unidad', 'Harina de maíz 1 Kilo', 'Queso pategras 250 grs', 'Queso Cremoso  750 grs', 'Sal c/n', 'Cebolla 4 Unidades'],
        instructions:
          ['Rehogar 4 cebollas en juliana fina en ½ l de aceite, rehogarlas a fuego suave hasta que estén bien cremosas (aproximadamente 90 minutos).',
            'No se tienen que dorar. Dejar enfriar.', 'Una vez frías mezclar en un bol las cebollas, el aceite de cocción, leche y de a poco añadir harina de maíz instantánea mezclando para que no se formen grumos.',
            'Agregar los huevos de a uno y dejar reposar por lo menos 1 hora en frío y tapado.', 'Incorporar el queso cremoso en cubos, la mitad del pategrás rallado, incorporar y condimentar con sal', 'Aceitar el fondo y las paredes de una asadera y colocarr la preparación anterior.']
      },
      {
        //id: 2,
        title: 'Chipa So’o',
        description: 'Aprende a preparar esta receta de Chipa so\'o, por Estefania Colombo en elGourmet',
        ingredients: ['Roast Beef 1 Pieza', 'Cebolla 1 Unidad', 'Tomate perita 3 Unidades', 'Morrón ½ Unidades', 'Pimentón 1 Pizca'],
        instructions:
          ['Sellar la pieza de carne por sus lados en una sartén amplia con tapa que pueda ir al horno.', 'Agregar una vez dorada la carne en trozos grandes cebolla, tomates, morrón rojo y cocinar unos minutos.', 'Condimentar con sal, pimentón, comino, extracto de tomate, tomillo, orégano, romero y desglasar con vino blanco.',
            ' Tapar y llevar a horno a 150ª C por 3 horas una vez evaporado el alcohol cubrir hasta la mitad del roastbeef con agua.']
      }]
  },
  getters: {
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      state.recipes.push(recipe)
    }
  },
  actions: {
  },
  modules: {
  }
})
