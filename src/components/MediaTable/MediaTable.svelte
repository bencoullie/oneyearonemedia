<script>
  import { mediaStore } from '../../state/mediaStore.js'
  import MediaRow from './MediaRow.svelte'
  export let media
</script>

<style>
  table {
    width: calc(100% - 4px);
  }
</style>

<div class="nes-table-responsive">
  <table class="nes-table is-bordered is-dark">
    <thead>
      <tr>
        <th>To Do</th>
        <th>Given By</th>
        <th>Done</th>
      </tr>
    </thead>
    <tbody>
      {#each media as item}
        <MediaRow name={item.name} giver={item.giver} />
      {/each}
    </tbody>
  </table>
</div>
