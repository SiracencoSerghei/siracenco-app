
const API_URL = "http://localhost:8000";
// API_URL = "http://web:8000";

export async function signup(email: string, password: string) {
	const res = await fetch(`${API_URL}/signup`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password })
	});
	return res.json();
}

export async function login(email: string, password: string) {
	const formData = new URLSearchParams();
	formData.append('username', email); // FastAPI OAuth2PasswordRequestForm очікує "username"
	formData.append('password', password);

	const res = await fetch(`${API_URL}/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: formData
	});
	return res.json(); // повертає { access_token, token_type }
}

export async function getProtectedData(token: string) {
	const res = await fetch(`${API_URL}/protected`, {
		headers: { Authorization: `Bearer ${token}` }
	});
	return res.json();
}
