Vue.component('contador',{
	template:
	`
		<div>
			<h3>0</h3>
			<button @click="numero++">+</button>
		</div>
	`,
	data(){
		return{
			numero: 0
		} 
	}
})