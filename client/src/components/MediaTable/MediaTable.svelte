<script>
  import MediaRow from './MediaRow.svelte'
  export let media
  export let updateProfiles
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
        <MediaRow media={item} {updateProfiles} />
      {/each}
    </tbody>
  </table>
</div>
