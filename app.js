angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "Pedro", telefone: "99998888"},
        {nome: "Ana", telefone: "99998877"},
        {nome: "Maria", telefone: "99998866"},
    ];
});