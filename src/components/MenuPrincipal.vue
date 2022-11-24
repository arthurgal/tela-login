<template>
    <div class="side-bar">
        <h3>Cadastro</h3>
        <b-nav vertical class="text-start">
            <b-nav-item active><b-icon icon="house-door-fill"></b-icon>Inicio</b-nav-item>
            <b-nav-item active><b-icon icon="person-fill"></b-icon>Usuarios</b-nav-item>
            <b-nav-item active><b-icon icon="wallet-fill"></b-icon>Equipamentos</b-nav-item>
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
    width: 75%;
    height: 100vh;
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