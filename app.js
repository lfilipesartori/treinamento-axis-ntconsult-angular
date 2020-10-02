angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaController", function($scope) {
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
        {nome: "João", telefone: "88889999", cor: "blue"},
        {nome: "Ana", telefone: "88888888", cor: "red"},
        {nome: "Pedro", telefone: "88887777", cor: "purple"},
    ];
    $scope.operadoras = [
        {nome: "Oi", codigo: "14", categoria: "Celular"},
        {nome: "Vivo", codigo: "15", categoria: "Celular"},
        {nome: "Tim", codigo: "41", categoria: "Celular"},
        {nome: "GVT", codigo: "25", categoria: "Fixo"},
        {nome: "Embratel", codigo: "21", categoria: "Fixo"},
    ];
   $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
   };
   $scope.apagarContatos = function (contatos) {
       $scope.contatos =  contatos.filter(function(contato){
            if (!contato.selecionado) return contato;
        });
    };
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

});

