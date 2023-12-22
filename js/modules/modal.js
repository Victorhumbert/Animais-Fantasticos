export default class Modal {
	constructor(botaoAbrir, botaoFechar, containerModal) {
		this.botaoAbrir = document.querySelector(botaoAbrir);
		this.botaoFechar = document.querySelector(botaoFechar);
		this.containerModal = document.querySelector(containerModal);

		// Bind this ao callback para fazer referência ao objeto da classe
		this.eventToggleModal = this.eventToggleModal.bind(this);
		this.clickForaModal = this.clickForaModal.bind(this);
	}

	// Abre ou fechao modal
	toggleModal(event) {
		this.containerModal.classList.toggle("ativo");
	}

	// Adiciona o evento de toggle ao modal
	eventToggleModal(event) {
		event.preventDefault();
		this.toggleModal(event);
	}

	// Fecha o modla ao clicar do lador de fora
	clickForaModal(event) {
		if (event.target === this.containerModal) {
			this.toggleModal(event);
		}
	}

	// Adiciona os eventos aos elementos do modal
	addModalEvents() {
		this.botaoAbrir.addEventListener("click", this.eventToggleModal);
		this.botaoFechar.addEventListener("click", this.eventToggleModal);
		this.containerModal.addEventListener("click", this.clickForaModal);
	}

	init() {
		if (this.containerModal && this.botaoFechar && this.botaoAbrir) {
			this.addModalEvents();
		}
		return this;
	}
}
