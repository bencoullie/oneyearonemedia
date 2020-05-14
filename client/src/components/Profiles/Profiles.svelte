<script>
  import Profile from '../Profile/Profile.svelte'
  import PageLoading from '../PageLoading/PageLoading.svelte'
  import PageError from '../PageError/PageError.svelte'
  import 'whatwg-fetch'

  async function fetchData() {
    const res = await fetch('http://localhost:5001/api/getUsers')
    const data = await res.json()

    if (res.ok) {
      return data
    } else {
      // eslint-disable-next-line no-console
      console.log('data:', data)
      throw new Error(data)
    }
  }
</script>

<style>
  .profiles-grid {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 10px;
    max-width: 1250px;
  }
</style>

{#await fetchData()}
  <PageLoading />
{:then profiles}
  <div class="profiles-grid">
    {#each profiles as profile}
      <Profile username={profile.name} />
    {/each}
  </div>
{:catch error}
  <PageError {error} />
{/await}
