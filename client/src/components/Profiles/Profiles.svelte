<script>
  import Profile from '../Profile/Profile.svelte'
  import PageLoading from '../PageLoading/PageLoading.svelte'
  import PageError from '../PageError/PageError.svelte'
  import cloneDeep from 'lodash/cloneDeep'
  import 'whatwg-fetch'
  let profiles = []

  const persistStatusToggle = async (consumerId, mediaId) => {
    const url = '__serverBaseUrl__/api/toggleMediaStatus'
    const body = { consumerId, mediaId }

    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })

    if (response.ok) {
      return true
    } else {
      throw new Error('Unable to persist media compelted status change')
    }
  }

  const generateMediaStatusToggler = profileId => {
    const toggleMediaDoneStatus = async mediaId => {
      const clonedProfiles = cloneDeep(profiles)
      const persistSucceeded = await persistStatusToggle(profileId, mediaId)

      if (persistSucceeded) {
        clonedProfiles.forEach(profile => {
          profile.media.forEach(item => {
            if (item.id === mediaId) {
              item.done = !item.done
            }
          })
        })

        profiles = clonedProfiles
      }
    }

    return toggleMediaDoneStatus
  }

  const buildProfiles = profileData => {
    const profiles = profileData.reduce((accumulator, row) => {
      const existingProfile = accumulator.find(
        profile => profile.id === row.consumer_id
      )

      if (existingProfile) {
        const newMedia = {
          id: row.media_id,
          name: row.media_name,
          giver: row.giver_name,
          done: row.completed,
        }
        existingProfile.media.push(newMedia)
      } else {
        const profile = {
          id: row.consumer_id,
          name: row.consumer_name,
          media: [
            {
              id: row.media_id,
              name: row.media_name,
              giver: row.giver_name,
              done: row.completed,
            },
          ],
        }
        accumulator.push(profile)
      }

      return accumulator
    }, [])

    return profiles
  }

  async function fetchData() {
    const response = await fetch('__serverBaseUrl__/api/profiles')

    if (response.ok) {
      const data = await response.json()
      profiles = buildProfiles(data)
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
        toggleMediaDoneStatus={generateMediaStatusToggler(profile.id)} />
    {/each}
  </div>
{:catch error}
  <PageError {error} />
{/await}
