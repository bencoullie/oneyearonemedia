<script>
  export let progressPercentage
  const good = 'is-success'
  const ok = 'is-warning'
  const bad = 'is-error'

  const getCurrentStatus = percentage => {
    if (percentage >= 75) {
      return good
    }

    if (percentage > 33 && percentage < 75) {
      return ok
    }

    return bad
  }
</script>

<style>
  progress {
    width: calc(100% - 8px);
  }

  .nes-progress::-webkit-progress-bar {
    background-color: #fff;
  }

  .nes-progress::-webkit-progress-value {
    background-color: #d1fff4;
  }

  .nes-progress::-moz-progress-bar {
    background-color: #d1fff4;
  }

  .nes-progress::-ms-fill {
    background-color: #d1fff4;
  }
</style>

<progress
  class={`nes-progress ${getCurrentStatus(progressPercentage)}`}
  value={progressPercentage}
  max="100" />
