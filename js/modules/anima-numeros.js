export default function initAnimaNumeros() {
	function animaNumeros() {
		const numeros = document.querySelectorAll("[data-numero]");

		numeros.forEach((numero) => {
			const total = +numero.innerText;
			const incremento = Math.floor(total / 100);
			let start = 0;
			const timer = setInterval(() => {
				start += incremento;
				numero.innerText = start;
				if (start > total) {
					numero.innerText = total;
					clearInterval(timer);
				}
			}, 25 * Math.random());
		});
	}

	let observador;
	function handleMutation(mutacao) {
		if (mutacao[0].target.classList.contains("ativo")) {
			observador.disconnect();
			animaNumeros();
		}
	}
	observador = new MutationObserver(handleMutation);

	const observadorTarget = document.querySelector(".numeros");

	observador.observe(observadorTarget, { attributes: true });
}
