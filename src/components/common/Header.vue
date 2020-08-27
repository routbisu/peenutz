<template>
  <header>
    <div class="logo-section"><span>🥜</span> Peenutz</div>
    <a href="https://github.com/routbisu/peenutz" target="_blank">⚙️</a>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
header {
  padding: 20px 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 1.5rem;
  }

  .logo-section {
    text-align: left;
    font-weight: 700;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 1.1rem;

    span {
      font-size: 1.9rem;
      margin-right: 10px;
    }
  }
}
</style>
