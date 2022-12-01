<template>
    <b-container class="side-bar">
        <b-row class="pt-3 pb-2 mb-3 border-bottom">
            <b-col class="mt-2">
                <h3>Consulta</h3>
            </b-col>
        </b-row>
        
        <b-nav vertical>
            
            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/consulta/equipamento" active>Equipamento</b-nav-item>
            </div>

            <div class="d-flex align-items-center div-tipicos">
                <b-icon variant="light" icon="arrow-right-circle"></b-icon>
                <b-nav-item to="/consulta/usuario" active>Usuario</b-nav-item>
            </div>

        </b-nav>
    </b-container>
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
    background-color: #20262c;
    height: 1000px;
}

.side-bar h3 {
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
    color: #cbcdce;
}


.div-tipicos:hover{
    background-color: #465059;
    -webkit-box-shadow: 4px 0px 20px -11px #000000;
    box-shadow: 4px 0px 20px -11px #000000;
}
</style>