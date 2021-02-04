
app.controller("myCtrl", function ($scope) {/*crea el controlador de la aplicacion*/
    $scope.products = ["Leche", "Pan", "Queso"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) { return; }
        if ($scope.products.indexOf($scope.addMe) == -1) {/*verificar si son iguales a  los ya ingresados*/
            $scope.products.push($scope.addMe)
        } else {
            $scope.errortext = "El producto ya esta en la lista de compras.";
        }

    }
    $scope.removeItem = function (x) {/*Eliminar registro*/
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});