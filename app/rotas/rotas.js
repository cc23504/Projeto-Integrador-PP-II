const classArmariosCON = require('../controllers/armariosCON'); //importanto a classe armariosCON
const classClientesCON = require('../controllers/clientesCON'); //importanto a class clientesCON


const clienteCon = new classClientesCON();      // instanciando a class
const armariosCon = new classArmariosCON();      // instanciando a class

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });  // permite que o site seja acessado por todos.


    app.get("/", (req, res) => {   // criando a rota principal que funciona para pagina de apresentação
        res.render("intro");     // esta renderizando a pagina de introdução
    });

    app.get("/login", (req, res) => {
        res.render("login");
    });

    app.post("/fazerLoginCliente", clienteCon.fazerLogin()); //o formulario envia as informacoes de fazer login atraves da rota fazerLoginCliente 

    app.get("/cadastro", (req, res) => {
        res.render("cadastro");
    });

    app.get("/alugar", armariosCon.carregarPaginaArmarios());

    app.get("/confirmacao", (req, res) => {
        res.render("confirmacao");
    });
};