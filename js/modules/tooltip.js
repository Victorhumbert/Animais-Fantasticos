export default class Tooltip {
	constructor(tooltips) {
		this.tooltips = document.querySelectorAll(tooltips);

		// Bind do objeto da classe aos callbacks
		this.onMouseMove = this.onMouseMove.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
	}

	// Move a tooltip com base em seus estilos
	//  de acordo com a posição do mouse
	onMouseMove(event) {
		this.tooltipBox.style.top = `${event.pageY + 20}px`;
		if (event.pageX + 240 > window.innerWidth) {
			this.tooltipBox.style.left = `${event.pageX - 200}px`;
		} else {
			this.tooltipBox.style.left = `${event.pageX + 20}px`;
		}
	}

	// Remove a tooltipe os eventos de mousemove e mouseleave
	onMouseLeave({ currentTarget }) {
		this.tooltipBox.remove();
		currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
		currentTarget.removeEventListener("mousemove", this.onMouseMove);
	}

	// Cria a tooltip box e coloca no body
	criarTooltipBox(element) {
		const tooltipBox = document.createElement("div");
		const text = element.getAttribute("aria-label");
		tooltipBox.classList.add("tooltip");
		tooltipBox.innerHTML = `<p>${text}</p>`;
		document.body.appendChild(tooltipBox);
		this.tooltipBox = tooltipBox;
	}

	// cria a tooltip e adiciona os eventos 
	// de mousemove e mouseleave ao target
	onMouseOver({ currentTarget }) {
		// Cria a tooltipbox e coloca em uma propriedade
		this.criarTooltipBox(currentTarget);
		currentTarget.addEventListener("mousemove", this.onMouseMove);
		currentTarget.addEventListener("mouseleave", this.onMouseLeave);
	}

	// Adiciona os eventos de mouseover a cada tooltip
	addTooltipsEvent() {
		this.tooltips.forEach((item) => {
			item.addEventListener("mouseover", this.onMouseOver);
		});
	}

	init() {
		if (this.tooltips.length) {
			this.addTooltipsEvent();
		}
		return this;
	}
}
