<script>
  import MediaRow from './MediaRow.svelte'
  export let media
  export let toggleMediaDoneStatus
</script>

<style>
  table {
    width: calc(100% - 8px);
  }

  .nes-table-responsive {
    margin-bottom: 24px;
  }
</style>

<div class="nes-table-responsive">
  <table class="nes-table is-bordered">
    <thead>
      <tr>
        <th>To Do</th>
        <th>Given By</th>
        <th>Done</th>
      </tr>
    </thead>
    <tbody>
      {#each media as item}
        <MediaRow media={item} {toggleMediaDoneStatus} />
      {/each}
    </tbody>
  </table>
</div>
