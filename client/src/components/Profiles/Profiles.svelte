<script>
  import Profile from '../Profile/Profile.svelte'
  import PageLoading from '../PageLoading/PageLoading.svelte'
  import PageError from '../PageError/PageError.svelte'
  import cloneDeep from 'lodash/cloneDeep'
  import 'whatwg-fetch'
  let profiles = []

  const toggleMediaDoneStatus = mediaId => {
    const clonedProfiles = cloneDeep(profiles)

    clonedProfiles.forEach(profile => {
      profile.media.forEach(item => {
        if (item.id === mediaId) {
          item.done = !item.done
        }
      })
    })

    profiles = clonedProfiles
  }

  async function fetchData() {
    const res = await fetch('http://localhost:5001/api/getUsers')
    const data = await res.json()

    if (res.ok) {
      profiles = data
    } else {
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
{:then}
  <div class="profiles-grid">
    {#each profiles as profile}
      <Profile
        username={profile.name}
        media={profile.media}
        {toggleMediaDoneStatus} />
    {/each}
  </div>
{:catch error}
  <PageError {error} />
{/await}
