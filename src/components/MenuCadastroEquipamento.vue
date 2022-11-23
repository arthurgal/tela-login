<template>
    <div class="side-bar">
        <h3>Cadastro</h3>
        <ul>
            <li><a href="#">teste</a></li>
            <li><a href="#">teste 2</a></li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'MenuCadastroEquipamento',
}
</script>

<style scoped>
.side-bar {
    -webkit-box-shadow: 4px 0px 20px -11px #000000;
    box-shadow: 4px 0px 20px -11px #000000;
    height: 100vh;
    background-color: #384c61;
}

.side-bar h3 {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    color: aliceblue;
}

li {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: aliceblue;
}
</style>