var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/votacao", function (req, res) {
    usuarioController.votacao(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

    // skatistas

router.get("/luan", function (req, res) {
    usuarioController.luan(req, res);
});

router.get("/nyjah", function (req, res) {
    usuarioController.nyjah(req, res);
});

router.get("/bob", function (req, res) {
    usuarioController.bob(req, res);
});

router.get("/tony", function (req, res) {
    usuarioController.tony(req, res);
});

router.get("/rodney", function (req, res) {
    usuarioController.rodney(req, res);
});

    // modalidades
    
router.get("/street", function (req, res) {
    usuarioController.street(req, res);
});

router.get("/downhill", function (req, res) {
    usuarioController.downhill(req, res);
});

router.get("/freestyle", function (req, res) {
    usuarioController.freestyle(req, res);
});

router.get("/vertical", function (req, res) {
    usuarioController.vertical(req, res);
});

router.get("/bowl", function (req, res) {
    usuarioController.bowl(req, res);
});

module.exports = router;