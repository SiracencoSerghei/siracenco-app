<script lang="ts">
  import { authModal, user } from '$lib/stores/auth';
  import '$lib/styles/modal.css';

  function closeModal() {
    authModal.set(null);
  }

  function handleSignup(e: SubmitEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.email as HTMLInputElement).value;
    user.set({ email });
    authModal.set(null);
  }
</script>

<div class="modal">
  <div class="modal-content">
    <h2>Signup</h2>
    <form on:submit={handleSignup}>
      <label>Email: <input type="email" name="email" required /></label>
      <label>Password: <input type="password" name="password" required /></label>
      <label>Confirm Password: <input type="password" required /></label>
      <button type="submit">Signup</button>
    </form>
    <button on:click={closeModal}>Close</button>
  </div>
</div>
