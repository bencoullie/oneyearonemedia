<style>
  .loader-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  .loading-text {
    position: relative;
    left: 10px;
    top: 10px;
  }
</style>

<div class="loader-wrapper">
  <div>
    <i class="nes-octocat animate" />
    <h2 class="loading-text">loading...</h2>
  </div>
</div>
