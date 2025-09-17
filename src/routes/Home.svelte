<script lang="ts">
	// якщо треба буде додати якісь інтерактивні елементи, можна тут
</script>

<header>
	<h1>Я - Сіраченко Сергій, <br /> Вітаю вас у світі програмування! 🚀</h1>
</header>

<main>
	<section id="python" class="grid">
		<div>
			<h2>Python 🐍</h2>
			<p>
				Python — універсальна мова програмування. Вона проста у вивченні та використовується для
				бекенд-розробки, аналізу даних, штучного інтелекту та автоматизації.
			</p>
		</div>
		<img src="https://www.python.org/static/community_logos/python-logo.png" alt="Python" />
	</section>

	<section id="javascript" class="grid">
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
			alt="JavaScript"
		/>
		<div>
			<h2>JavaScript ✨</h2>
			<p>
				JavaScript — серце фронтенду. З його допомогою створюються інтерактивні сайти, а разом із
				Node.js можна писати і бекенд.
			</p>
		</div>
	</section>

	<section id="frontend" class="grid">
		<div>
			<h2>Frontend 🎨</h2>
			<p>
				Це частина сайту, яку бачить користувач. HTML, CSS та JS — основа. Сучасні фреймворки:
				React, Vue, Svelte.
			</p>
		</div>
		<img
			src="https://static.vecteezy.com/system/resources/previews/041/931/997/non_2x/front-end-developer-concept-for-landing-page-template-man-creates-web-page-and-programming-development-user-interface-people-scene-illustration-with-flat-character-design-for-web-banner-vector.jpg"
			alt="Frontend Development"
		/>
	</section>

	<section id="backend" class="grid">
		<img
			src="https://static.vecteezy.com/system/resources/previews/002/006/382/non_2x/modern-flat-design-illustration-of-backend-development-free-vector.jpg"
			alt="Backend Development"
		/>
		<div>
			<h2>Backend ⚙️</h2>
			<p>
				Це логіка, база даних і API. Тут часто використовують Python (Django, FastAPI) або
				JavaScript (Node.js, Express).
			</p>
		</div>
	</section>
</main>

<style>
	header {
		height: 100vh;
		background: url('https://images.unsplash.com/photo-1581090700227-4c4e0f3b89df?auto=format&fit=crop&w=1350&q=80')
			no-repeat center center/cover;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		color: white;
	}

	header h1 {
		font-size: 3rem;
		background: rgba(0, 0, 0, 0.6);
		padding: 1rem 2rem;
		border-radius: 10px;
	}

	main {
		padding: 2rem;
	}

	section {
		margin-bottom: 4rem;
	}

	section h2 {
		color: #007acc;
		margin-bottom: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: center;
	}

	.grid img {
		width: 100%;
		border-radius: 10px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}
</style>
