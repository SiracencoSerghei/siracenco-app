<script lang="ts">
	import { authModal, user } from '$lib/stores/auth';
	import '$lib/styles/modal.css';
	import { PUBLIC_AUTH_HOST } from '$env/static/public';

	const AUTH_HOST = PUBLIC_AUTH_HOST;

	function closeModal() {
		authModal.set(null);
	}

	async function handleSignup(e: SubmitEvent) {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const email = (form.email as HTMLInputElement).value;
		const password = (form.password as HTMLInputElement).value;
		const confirmPassword = (form[2] as HTMLInputElement).value;

		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			// 1️⃣ Signup через JSON
			const signupResp = await fetch(`${AUTH_HOST}/signup`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});

			if (!signupResp.ok) {
				const error = await signupResp.json();
				alert(`Signup failed: ${error.detail || signupResp.statusText}`);
				return;
			}

			console.log('Signup success');

			// 2️⃣ Login через form-data
			const formData = new URLSearchParams();
			formData.append('username', email);
			formData.append('password', password);

			const loginResp = await fetch(`${AUTH_HOST}/login`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: formData
			});

			if (!loginResp.ok) {
				const error = await loginResp.json();
				alert(`Login failed: ${JSON.stringify(error)}`);
				return;
			}

			const loginData = await loginResp.json();
			console.log('Login success:', loginData);

			user.set({
				email,
				token: loginData.access_token
			});

			authModal.set(null);
		} catch (err) {
			console.error('Network or server error:', err);
			alert('Network error or server not reachable');
		}
	}
</script>

<!-- <script lang="ts">
async function handleSignup(e: SubmitEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const email = (form.email as HTMLInputElement).value;
  const password = (form.password as HTMLInputElement).value;
  const confirmPassword = (form[2] as HTMLInputElement).value;

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    // 1️⃣ Signup через JSON
    const signupResp = await fetch(`${AUTH_HOST}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!signupResp.ok) {
      const error = await signupResp.json();
      alert(`Signup failed: ${error.detail || signupResp.statusText}`);
      return;
    }

    // 🔴 ТУТ змінюємо
    console.log('Signup success');
    alert("Signup successful! Please check your email and verify your account before logging in.");

    // ❌ Прибираємо автоматичний login
    // const formData = new URLSearchParams();
    // formData.append('username', email);
    // formData.append('password', password);
    // const loginResp = await fetch(`${AUTH_HOST}/login`, {...});

    // ❌ Прибираємо user.set() і authModal.set(null) тут
    authModal.set(null);

  } catch (err) {
    console.log("AUTH_HOST =", AUTH_HOST);

    console.error('Network or server error:', err);
    alert('Network error or server not reachable');
  }
}


</script> -->

<div class="modal">
	<div class="modal-content">
		<h2>Signup</h2>
		<form onsubmit={handleSignup}>
			<label>Email: <input type="email" name="email" required /></label>
			<label>Password: <input type="password" name="password" required /></label>
			<label>Confirm Password: <input type="password" required /></label>
			<button type="submit">Signup</button>
		</form>
		<button onclick={closeModal}>Close</button>
	</div>
</div>
