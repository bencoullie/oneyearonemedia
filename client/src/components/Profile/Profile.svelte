<script>
  import MediaTable from '../MediaTable/MediaTable.svelte'
  import ProgressSection from './ProgressSection.svelte'
  export let username
  export let media
  export let toggleMediaDoneStatus

  const getProgressPercentage = media => {
    const totalNumberOfMedia = media.length
    const numberOfCompletedMedia = media.reduce(
      (total, item) => (item.done ? total + 1 : total),
      0
    )
    return (numberOfCompletedMedia / totalNumberOfMedia).toFixed(2) * 100
  }
</script>

<style>
  .profile {
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }

  .username-box {
    margin-bottom: 20px;
  }

  .nes-container {
    padding: 2em;
  }
</style>

<div class="profile">
  <div class="username-box nes-container is-rounded">
    <h1>{username}</h1>
  </div>

  <section class="showcase is-rounded">
    <section class="nes-container">
      <MediaTable {media} {toggleMediaDoneStatus} />
      <ProgressSection progressPercentage={getProgressPercentage(media)} />
    </section>
  </section>
</div>
