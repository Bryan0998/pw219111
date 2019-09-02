Vue.component('contador',{
	template:
	`
		<div>
			<h2>Componente 1</h2>
			<componente2></componente2>
		</div>
	`,
	data(){
		return{
			numero: 0
		} 
	}
})