<script>
  export let error
</script>

<style>
  .error-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 100vh;
    align-items: center;
    justify-items: center;
    text-align: center;
  }

  .error-button {
    margin: 0 auto;
  }

  .error-text {
    position: relative;
    bottom: 23px;
  }

  .actual-error {
    padding-top: 20px;
  }
</style>

<div class="error-wrapper">
  <div>
    <i class="nes-charmander" />
    <h3 class="nes-text is-error actual-error">{error}...</h3>
    <p class="nes-text">
      <i class="nes-icon is-large heart is-empty" />
      <span class="error-text">
        In other words, our prince is in another castle.
      </span>
      <i class="nes-icon is-large heart is-empty" />
    </p>
    <button
      type="button"
      class="nes-btn is-error error-button"
      on:click={() => location.reload()}>
      Reload
    </button>
  </div>
</div>
