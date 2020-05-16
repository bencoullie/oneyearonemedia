<script>
  export let media
  export let updateProfiles

  const { id, name, giver, done } = media
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
        on:change={() => updateProfiles(id)} />
      <span />
    </label>
  </td>
</tr>
