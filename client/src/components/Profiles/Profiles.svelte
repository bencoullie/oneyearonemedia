<script>
  import Profile from '../Profile/Profile.svelte'
  import 'whatwg-fetch'

  async function fetchData() {
    const res = await fetch('http://localhost:5001/api/getUsers')
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      throw new Error(data)
    }
  }
</script>

{#await fetchData()}
  <p>Loading...</p>
{:then profiles}
  {#each profiles as profile}
    <Profile username={profile.name} />
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
