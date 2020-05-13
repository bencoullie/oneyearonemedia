<script>
  import MediaTable from '../MediaTable/MediaTable.svelte'
  import ProgressSection from './ProgressSection.svelte'
  import { mediaStore } from '../../state/mediaStore'
  export let username

  const ipsumMedia = [
    { name: 'Hamlet', giver: 'Benc', done: false },
    { name: 'Berzerk', giver: 'Chan Lean', done: false },
    { name: 'Honey and Clover', giver: 'Mazin', done: false },
  ]

  mediaStore.set(ipsumMedia)

  let media
  const unsubscribe = mediaStore.subscribe(storedMedia => {
    media = storedMedia
  })

  const getProgressPercentage = media => {
    const totalNumberOfMedia = media.length
    const numberOfCompletedMedia = media.reduce(
      (total, item) => (item.done ? total + 1 : total),
      0
    )
    return (numberOfCompletedMedia / totalNumberOfMedia).toFixed(2) * 100
  }
</script>

<div class="nes-container is-rounded is-dark">
  <h1>{username}</h1>
</div>

<section class="showcase">
  <section class="nes-container with-title">
    <h3 class="title is-disabled">Media</h3>
    <MediaTable {media} />
    <ProgressSection progressPercentage={getProgressPercentage(media)} />
  </section>
</section>
