<template>
    <div class="side-bar">
        <div class="d-flex header-menu">
            <img class="imagem-almoxarifado" src="../../public/img/almoxarifado.png">
            <h3>Cadastro</h3>
        </div>
        <b-nav justified vertical>
            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/equipamento" active>Equipamento</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/usuario" active>Usuario</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/setor" active>Setor</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/sala" active>Sala</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item active>Predio</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item active>Status Equipamento</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item active>Tipo Equipamento</b-nav-item>
            </div>

        </b-nav>
    </div>
</template>

<script>

export default {
    name: 'MenuPrincipal',
}
</script>

<style scoped>
.side-bar {
    -webkit-box-shadow: 4px 0px 20px -11px #000000;
    box-shadow: 4px 0px 20px -11px #000000;
    background-color: #384c61;
    height: 735px;
}

.header-menu{
    padding-top: 10px;
    padding-left: 30px;
    border-bottom: #2d3c4c solid 2px;
}

.side-bar h3 {
    margin-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: aliceblue;
}

.imagem-almoxarifado{
    width: 50px;
    height: 50px;
}

a {
    text-decoration: none;
    color: aliceblue;
}

a:hover{
    color: #2d3c4c;
}

.div-tipicos{
    padding: 5px 0px 5px 20px;
}

.div-tipicos:hover{
    background-color: #485d73;
}
</style>