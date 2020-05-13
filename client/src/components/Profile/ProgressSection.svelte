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

`
<progress
  class={`nes-progress ${getCurrentStatus(progressPercentage)}`}
  value={progressPercentage}
  max="100" />
