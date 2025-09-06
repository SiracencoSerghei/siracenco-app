<script lang="ts">
  import { authModal, user, type User } from '$lib/stores/auth';
  import LoginModal from '$lib/components/LoginModal.svelte';
  import SignupModal from '$lib/components/SignupModal.svelte';

  let modal: 'login' | 'signup' | null = null;
  let currentUser: User | null = null;

  $: authModal.subscribe(v => modal = v);
  $: user.subscribe(v => currentUser = v);

  function openLogin() {
    authModal.set('login');
  }
  function openSignup() {
    authModal.set('signup');
  }
  function logout() {
    user.set(null);
  }
</script>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>

  {#if currentUser}
    <span>👤 {currentUser.email}</span>
    <button on:click={logout}>Logout</button>
  {:else}
    <button on:click={openLogin}>Login</button>
    <button on:click={openSignup}>Signup</button>
  {/if}
</nav>

{#if modal === 'login'}
  <LoginModal />
{:else if modal === 'signup'}
  <SignupModal />
{/if}

<!-- <style>
  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    align-items: center;
  }
</style> -->
<style>
  nav {
    position: fixed;     /* фіксує навбар */
    top: 0;              /* прив’язує до верхнього краю */
    left: 0;
    width: 100%;         /* щоб тягнувся на всю ширину */
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #f0f0f0;
    align-items: center;
    z-index: 1000;       /* щоб завжди був над контентом */
  }

  main {
    margin-top: 70px;    /* відступ, щоб контент не заховався під навбар */
    padding: 1rem;
  }
</style>
