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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 10px;
    max-width: 1600px;
  }

  @media (max-width: 1075px) {
    .profiles-grid {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    :global(body) {
      font-size: 12px;
    }
  }
</style>

{#await fetchData()}
  <PageLoading />
{:then}
  <style>
    .title {
      margin-top: 40px;
      text-align: center;
    }
    .title-text {
      position: relative;
      bottom: 14px;
    }
  </style>
  <h1 class="title">
    <i class="nes-icon is-large heart" />
    <span class="title-text">Profiles</span>
    <i class="nes-icon is-large is-half heart" />
  </h1>
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
