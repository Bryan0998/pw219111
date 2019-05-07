const app = new Vue({
	el: "#app",
	data: {
		titulo: 'Hola mundo con VUE',
		frutas: ['manzanas','peras','platano','mango'],
		frutas2: [
			{nombre:"manzana",cantidad:10},
			{nombre:"peras",cantidad:0},
			{nombre:"platanos",cantidad:5},
			{nombre:"mango",cantidad:12}
		]
	}
});