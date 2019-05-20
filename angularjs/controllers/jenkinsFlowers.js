angular.module("jenkinsFlowers")
	.constant("dataUrl", "http://localhost:5500/products")
	.constant("orderUrl", "http://localhost:5500/orders")
	.controller("jenkinsFlowersCtrl",function($scope, $http, $location,dataUrl, orderUrl, cart){

	$scope.data = {};

	$http.get(dataUrl)
		.success(function (data) {
			$scope.data.products = data;
		})
		.error(function (error) {
			$scope.data.error = error;
		});

	$scope.sendOrder = function (deliveryDetails) {
		var order = angular.copy(deliveryDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl, order)
		.success(function (data){
			$scope.data.orderId = data.id;
			cart.getProducts().length = 0;
		})
		.error(function (error){
			$scope.data.orderError = error;
		}).finally(function () {
			$location.path("/complete");
		});
	}
});