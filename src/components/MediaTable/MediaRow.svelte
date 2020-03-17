<script>
  import { mediaStore } from '../../state/mediaStore'
  export let name
  export let giver
  export let done

  const adaptMediaStore = name => {
    mediaStore.update(oldStore => {
      const clone = [...oldStore]

      return clone.map(item => {
        if (item.name === name) {
          item.done = !item.done
        }
        return item
      })
    })
  }
</script>

<tr>
  <td>{name}</td>
  <td>{giver}</td>
  <td>
    <label>
      <input
        type="checkbox"
        class="nes-checkbox is-dark"
        checked={done}
        on:change={() => adaptMediaStore(name)} />
      <span />
    </label>
  </td>
</tr>
