<script>
  import MediaTable from '../MediaTable/MediaTable.svelte'
  import ProgressSection from './ProgressSection.svelte'
  export let username
  export let media
  export let updateProfiles

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
  }
</style>

<div class="profile">
  <div class="nes-container is-rounded is-dark">
    <h1>{username}</h1>
  </div>

  <section class="showcase">
    <section class="nes-container with-title">
      <h3 class="title is-disabled">Media</h3>
      <MediaTable {media} {updateProfiles} />
      <ProgressSection progressPercentage={getProgressPercentage(media)} />
    </section>
  </section>
</div>
