type ModalType = 'default' | 'error' | 'caution'

type ActivatePropsType = {
	modalType: ModalType
	headingText?: string
	message: string
	onModalClose?: any
}

export default class MessageModalControllerInitializer {
	_modalElement
	_modalBGElement
	_modalContentElement
	_modalContentHeaderElement
	_modalContentHeaderTextElement
	_modalContentHeaderCloseButtonElement
	_modalContentBodyElement
	_modalType
	_onActivateComplete
	_onInactivateComplete
	constructor() {
		console.log(`log ::: ${this.constructor.name}.constructor`)
		this._modalElement = document.getElementById('message-modal') as HTMLDivElement
		this._modalBGElement = this._modalElement.querySelector('.message-modal__bg') as HTMLDivElement
		this._modalContentElement = this._modalElement.querySelector('.message-modal__content') as HTMLDivElement
		this._modalContentHeaderElement = this._modalElement.querySelector('.message-modal__content__header') as HTMLDivElement
		this._modalContentHeaderTextElement = this._modalElement.querySelector('.message-modal__content__header__text') as HTMLDivElement
		this._modalContentHeaderCloseButtonElement = this._modalElement.querySelector('.message-modal__content__header__close-button') as HTMLDivElement
		this._modalContentBodyElement = this._modalElement.querySelector('.message-modal__content__body') as HTMLDivElement
		this._modalType = 'default' as ModalType
		this._modalBGElement.addEventListener('click', () => this.inactivate())
		this._modalContentHeaderCloseButtonElement.addEventListener('click', () => this.inactivate())
		this._onActivateComplete = () => {}
		this._onInactivateComplete = () => {}
	}
	getModalColorClass({ modalType }: { modalType: ModalType }) {
		switch (modalType) {
			case 'default':
				return 'bg-theme'
			case 'error':
				return 'bg-custom-red'
			case 'caution':
				return 'custom-yellow'
		}
	}
	activate({ modalType, headingText, message }: ActivatePropsType) {
		this._modalType = modalType
		this._modalContentHeaderElement.classList.add(this.getModalColorClass({ modalType }))
		this._modalContentHeaderTextElement.innerText = headingText || ''
		this._modalContentBodyElement.innerText = message
		this._modalElement.classList.remove('hidden')
		this._modalContentElement.classList.add('activate')
		setTimeout(() => {
			this._modalContentElement.classList.remove('activate')
			this._onActivateComplete()
		}, 300)
	}
	inactivate() {
		this._modalContentElement.classList.add('inactivate')
		setTimeout(() => {
			this._modalElement.classList.add('hidden')
		}, 280)
		setTimeout(() => {
			this._modalContentHeaderElement.classList.remove(this._modalType)
			this._modalContentHeaderTextElement.innerText = ''
			this._modalContentBodyElement.innerText = ''
			this._modalContentElement.classList.remove('inactivate')
			this._onInactivateComplete()
		}, 300)
	}
	setOnActivateComplete(_function: any) {
		this._onActivateComplete = _function
	}
	setOnInactivateComplete(_function: any) {
		this._onInactivateComplete = _function
	}
}
