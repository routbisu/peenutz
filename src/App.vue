<template>
  <div id="app">
    <Header />
    <Counter />
  </div>
</template>

<script>
import Header from './components/common/Header';
import Counter from './components/Counter';

export default {
  name: 'App',
  components: {
    Header,
    Counter
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
html {
  font-size: 16px;
}

body {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #232c45;
  color: #fff;
}
</style>
