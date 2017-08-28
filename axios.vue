<script type="text/javascript">
	created () {
		axios.post('/user',{
			first: "Huang",
			last: "Chongqing"
		})
		.then(function (res) {
			res.data
		})
		.catch(function (error) {
			console.log(error)
		})
	}
</script>