
signUpVU = new Vue({
	el: '#sign-up-form',
	data: {
		email : '',
		password : '',
		firstName : '',
		lastName : '',
		userId  : ''
	},
	created (){
		var _this = this;
		_this.userId = localStorage.getItem("waterTank-userId");
		if(_this.userId){
			window.location.href= "/home";
		}
	},
	methods : {
		onSignUp : function (){
			if(!_.isEmpty(this.email) && !_.isEmpty(this.password)) {
				var data = {};
				data.email = this.email;
				data.password = this.password;
				data.firstName = this.firstName;
				data.lastName = this.lastName;
				
				axios.post('/app/sign-up', data)
				.then(response => {
					if (response.data) {
						if(response.data.user){
							window.location.href= "/login";
						}
					}
				})
				.catch(error => {
					console.log(error);

				})
			}
		}
	}
});


