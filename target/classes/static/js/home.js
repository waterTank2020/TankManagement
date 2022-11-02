
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
						_this.buildingList.push(response.data.building);
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
						_this.yearlyServiceList.push(response.data.yearlyService);
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
						_this.monthlyOutletList.push(response.data.monthlyOutlet);
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
						_this.monthlyFlowList.push(response.data.monthlyFlow);
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
						_this.mainSupplyList.push(response.data.mainSupply);
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
						_this.quaterlyServiceList.push(response.data.quaterlyService);
						_this.showAddQuaterlyServicePopup = false;
					}
				})
				.catch(error => {
					console.log(error);

				});
		},
	}
});


