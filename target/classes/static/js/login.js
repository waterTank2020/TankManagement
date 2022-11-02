loginVU = new Vue({
	el: '#login-form',
	data: {
		email : '',
		password : '',		
	},
	created (){
		
	},
	methods : {
		onLogIn : function (){
			loggedInUser = "HELLo";
			if(!_.isEmpty(this.email) && !_.isEmpty(this.password)) {
				var data = {};
				data.email = this.email;
				data.password = this.password;
				data.firstName = "sd";
				data.lastName ="sda";
			
				axios.post('/app/log-in', data)
				.then(response => {
					if (response.data) {
						if(response.data.response == "success"){
							localStorage.setItem('waterTank-userId',response.data.user.id);
							window.location.href= "/welcome";
						}else{
							alert("wrong credentials");
						}
					}
				})
				.catch(error => {
					console.log(error);

				})
			}
		},
	}
});


