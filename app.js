angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "João", telefone: "88889999"},
        {nome: "Ana", telefone: "88888888"},
        {nome: "Pedro", telefone: "88887777"},
    ];
   $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
   }
});

