<template>
    <div class="side-bar h-100 w-75">
        <h3>Cadastro</h3>
        <b-nav vertical class="text-start">
            <b-nav-item active><b-icon icon="house-door-fill"></b-icon>Equipamento</b-nav-item>
            <b-nav-item active><b-icon icon="person-fill"></b-icon>Usuarios</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Setor</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Sala</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Predio</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Status Equipamento</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Tipo Equipamento</b-nav-item>
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
}

.side-bar h3 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: aliceblue;
}

.side-bar ul {
    padding: 0px;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: aliceblue;
}
</style>