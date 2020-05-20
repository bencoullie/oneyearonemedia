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
    min-width: 400px;
  }

  .username-box {
    margin-bottom: 20px;
    background: #ffd1dc;
  }

  .nes-container {
    padding: 2em;
    background: #ffd1dc;
  }

  @media (max-width: 1075px) {
    .profile {
      margin-left: 5px;
      margin-right: 5px;
      margin-bottom: 10px;
    }

    .username-box {
      margin-bottom: 10px;
    }

    .nes-container {
      padding: 1em;
    }
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
