Vue.config.devtools = true
mainVU = new Vue({
	el: '#home',
	data: {
		showAddBuildingPopup 		: false,
		buildingList				: [],
		createBuilding : {
			buildingName 			: '',
			buildingAddress 		: '',
			risk					: '',
			generalComments 		: '',
			usage 					: '',
			enableResponsibility 	: '',
			landlordResponsibility 	: '',
			dateRisk 				: '',
			dateReview 				: '',
			enableManagement 		: '',
			management 				: '',
			sentinel 				: '',
			temperature 			: '',
			tmvPresent 				: '',
			enableTMVComment 		: '',
			tmvComments 			: '',
			showers 				: '',
			enableShowerComment 	: '',
			showersComment 			: '',
			outlet 					: '',
			enableOutletComment 	: '',
			outletComment 			: '',
			otherAsset 				: '',
		},
		//................................................
		yearlyServiceList 			: [],
		showAddYearlyServicePopup	: false,
		createYearlyService : {
			name 					: '',
			date 					: '',
			location 				: '',
			cleanDisInfect 			: '',
			temperatureLog 			: '',
			fault 					: '',
			Signature 				: ''
		},
		//...............................................
		monthlyOutletList 			: [],
		showAddMonthlyOutLetPopup 	: false,
		createMonthlyOutlet : {
			name 					: '',
			date 					: '',
			location 				: '',
			waterSource 			: '',
			hotWater 				: '',
			coldWater 				: '',
			fault 					: '',
			Signature 				: ''
		},
		//................................................
		monthlyFlowList 			: [],
		showAddMonthlyFlowPopup 	: false,
		createMonthlyFlow : {
			name 					: '',
			date 					: '',
			location 				: '',
			flowTemperature 		: '',
			returnTemperature		: '',
			fault 					: '',
			Signature 				: ''
		},
		//...................................................
		mainSupplyList 				: [],
		showAddMainSupplyPopup 		: false,
		createMainSupply : {
			name 					: '',
			date 					: '',
			location 				: '',
			insulation				: '',
			drainPresent			: '',
		},
		//....................................................
		quaterlyServiceList 			: [],
		showAddQuaterlyServicePopup	: false,
		createQuaterlyService : {
			name 					: '',
			date 					: '',
			location 				: '',
			cleanDisinfection 			: '',
			temperatureLog 			: '',
			fault 					: '',
			Signature 				: ''
		},
		userId : '',
	},
	created (){
		// fetching buildings
		var _this = this;
		_this.userId = localStorage.getItem("waterTank-userId");
		if(!_this.userId){
			window.location.href= "/login";
		}
		axios.get('/app/fetch-data/'+_this.userId)
			.then(response => {
				if (response.data) {
					_this.buildingList 			= response.data.buildings;
					_this.yearlyServiceList 	= response.data.yearlyService;
					_this.monthlyOutletList 	= response.data.monthlyOutlet;
					_this.monthlyFlowList 		= response.data.monthlyFlow;
					_this.mainSupplyList 		= response.data.mainSupply;
					_this.quaterlyServiceList 	= response.data.quaterlyService;
				}
			})
			.catch(error => {
				console.log(error);

			})
	},
	methods : {
		onSaveBuilding : function () {
			var _this = this;
			_this.createBuilding.userId = _this.userId;
			axios.post('/app/create-building', this.createBuilding)
				.then(response => {
					if (response.data) {
						if(!_this.createBuilding.id) {
							_this.buildingList.push(response.data.building);
						}
						_this.showAddBuildingPopup = false;							
					}
				})
				.catch(error => {
					console.log(error);

				})
		},
		onSaveYearlyService : function () {
			var _this = this;
			_this.createYearlyService.userId = _this.userId;
			axios.post('/app/create-yearly-service', this.createYearlyService)
				.then(response => {
					if (response.data) {
						if(!_this.createYearlyService.id) {
							_this.yearlyServiceList.push(response.data.yearlyService);							
						} 
						_this.showAddYearlyServicePopup = false;
					}
				})
				.catch(error => {
					console.log(error);

				});
		},
		onSaveMonthlyOutlet: function() {
			var _this = this;
			_this.createMonthlyOutlet.userId = _this.userId;
			axios.post('/app/create-monthly-outlet', this.createMonthlyOutlet)
				.then(response => {
					if (response.data) {
						if(!_this.createMonthlyOutlet.id) {
							_this.monthlyOutletList.push(response.data.monthlyOutlet);
						}
						_this.showAddMonthlyOutLetPopup = false;							
					}
				})
				.catch(error => {
					console.log(error);

				});
		},
		onSaveMonthlyFlow : function () {
			var _this = this;
			_this.createMonthlyFlow.userId = _this.userId;
			axios.post('/app/create-monthly-flow', this.createMonthlyFlow)
				.then(response => {
					if (response.data) {
						if(!_this.createMonthlyFlow.id) {
							_this.monthlyFlowList.push(response.data.monthlyFlow);
						}
						_this.showAddMonthlyFlowPopup = false;							
					}
				})
				.catch(error => {
					console.log(error);

				});
			
		},
		onSaveMainSupply : function () {
			var _this = this;
			_this.createMainSupply.userId = _this.userId;
			axios.post('/app/create-main-supply', this.createMainSupply)
				.then(response => {
					if (response.data) {
						if(!_this.createMainSupply.id) {
							_this.mainSupplyList.push(response.data.mainSupply);
						}
						_this.showAddMainSupplyPopup = false;							
					}
				})
				.catch(error => {
					console.log(error);

				});
		},
		onSaveQuaterlyService : function () {
			var _this = this;
			_this.createQuaterlyService.userId = _this.userId;
			axios.post('/app/create-quaterly-service', this.createQuaterlyService)
				.then(response => {
					if (response.data) {
						if(!_this.createQuaterlyService.id) {
							_this.quaterlyServiceList.push(response.data.quaterlyService);
						}
						_this.showAddQuaterlyServicePopup = false;							
					}
				})
				.catch(error => {
					console.log(error);

				});
		},
		////////////////////////////////////////////////
		onSelectBuiliding : function (event) {
			var obj = _.find(this.buildingList,{id : event.target.value});
			if(obj) {
				this.createBuilding = obj;
				this.showAddBuildingPopup = true;				
			}else{
				this.createBuilding = {};
			}	
		},
		onSelectYearlyService : function (event) {
			var obj = _.find(this.yearlyServiceList,{id : event.target.value});
			if(obj) {
				this.createYearlyService = obj;
				this.showAddYearlyServicePopup = true;				
			}else{
				this.createYearlyService = {};
			}
		},
		onSelectMonthlyOutlet : function (event) {
			var obj = _.find(this.monthlyOutletList,{id : event.target.value});
			if(obj) {
				this.createMonthlyOutlet = obj;
				this.showAddMonthlyOutLetPopup = true;				
			}else{
				this.createMonthlyOutlet = {};
			}
		},
		onSelectMonthlyFlow : function (event) {
			var obj = _.find(this.monthlyFlowList,{id : event.target.value});
			if(obj) {
				this.createMonthlyFlow = obj;
				this.showAddMonthlyFlowPopup = true;				
			}else{
				this.createMonthlyFlow = {};
			}
		},
		onSelectMainSupply : function (event) {
			var obj = _.find(this.mainSupplyList,{id : event.target.value});
			if(obj) {
				this.createMainSupply = obj;
				this.showAddMainSupplyPopup = true;				
			}else{
				this.createMainSupply = {};
			}
		},
		onSelectQuaterlyService : function (event) {
			var obj = _.find(this.quaterlyServiceList,{id : event.target.value});
			if(obj) {
				this.createQuaterlyService = obj;
				this.showAddQuaterlyServicePopup = true;				
			}else{
				this.createQuaterlyService = {};
			}
		},
	}
});


