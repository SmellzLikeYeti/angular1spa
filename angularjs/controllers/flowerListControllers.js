angular.module("jenkinsFlowers")
	.constant("flowerListActiveClass", "btn-primary")
	.constant("flowerListPageCount" , 3)
	.controller("flowerListCtrl", function($scope,$filter,flowerListActiveClass,flowerListPageCount, cart){

		var selectedCategory = null;

		$scope.selectedPage = 1;
		$scope.pageSize = flowerListPageCount;

		$scope.selectCategory = function(newCategory){
			selectedCategory = newCategory;
			$scope.selectedPage = 1;
		}

		$scope.selectPage = function (newPage){
			$scope.selectedPage = newPage;
		}

		$scope.categoryFilterFn = function (product){
			return selectedCategory == null || product.category == selectedCategory;
		}

		$scope.getCategoryClass = function (category){
			return selectedCategory == category ? flowerListActiveClass : "";
		}

		$scope.getPageClass = function (page){
			return $scope.selectedPage == page ? flowerListActiveClass : "";
		}

		$scope.addProductToCart = function (product){
			cart.addProduct(product.id, product.name, product.price);
		}

	});