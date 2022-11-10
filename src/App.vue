<template>
  <div id="app">
    <nav class="nav-bar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style >

#meu-body{
  background-color: #384c61;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app .nav-bar{
  padding: 20px;
  text-align: center;
  margin: auto;
}
.nav-bar a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
  }
</style>
