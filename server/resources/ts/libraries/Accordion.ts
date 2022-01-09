// @ts-nocheck

export default class AccordionInitializer {
	constructor() {
		this._elements = document.querySelectorAll('[data-accordion-role=wrapper]')
		Array.prototype.forEach.call(this._elements, (element, i) => {
			new Accordion(element)
		})
	}
}

export class Accordion {
	constructor(element) {
		console.log(`log ::: ${this.constructor.name}.constructor`)
		this._id = element.dataset.accordionId
		this._emitter = document.querySelector(`[data-accordion-role=emitter][data-accordion-id=${this._id}]`)
		this._content = document.querySelector(`[data-accordion-role=content][data-accordion-id=${this._id}]`)
		this._contentHeight = 'auto'
		if (!JSON.parse(this._content.dataset.accordionIsOpen)) this.close(this._content)
		this._emitter.addEventListener('click', () => this.onEmitterClick())
	}
	onEmitterClick() {
		console.log(`log ::: ${this.constructor.name}.onEmitterClick`)
		this._content.dataset.accordionIsOpen = !JSON.parse(this._content.dataset.accordionIsOpen)
		JSON.parse(this._content.dataset.accordionIsOpen) ? this.open(this._content) : this.close(this._content)
	}
	open(content) {
		console.log(`log ::: ${this.constructor.name}.open`)
		content.style.height = this._contentHeight
	}
	close(content) {
		console.log(`log ::: ${this.constructor.name}.close`)
		content.style.height = 0
	}
	toggleByCustomCondition(condition, callback = null) {
		console.log(`log ::: ${this.constructor.name}.toggleByCustomCondition`)
		condition ? this.open(this._content) : this.close(this._content)
		callback ? callback() : console.log('log ::: toggleByCustomCondition / no callback')
	}
}
