// @ts-nocheck

/**
 * ページ内に validation したいフォームがひとつしかなく、
 * 固有な処理が必要ない場合は引数なしで ValidatorInitializer を使用する。
 * ページ内に validation したいフォームが複数ある場合は、
 * validateGroup にフォーム要素、そのフォームで使用したい trigger 用の任意の文字列を渡す。
 */
export default class ValidatorInitializer {
	constructor(validateGroup = document, triggerName = 'validate') {
		this._TriggerableFunctions = new TriggerableFunctions()
		this._elements = validateGroup.querySelectorAll('.validate')
		Array.prototype.forEach.call(this._elements, (element, i) => {
			new Validator(element, this._TriggerableFunctions, triggerName)
		})
	}
}

class Validator {
	constructor(element, triggerableFunctions, triggerName) {
		console.log(`log ::: ${this.constructor.name}.constructor`)
		this._element = element
		this._name = this._element.getAttribute('name')
		this._triggerableFunctions = triggerableFunctions
		this._validations = element.dataset.validations.split(' ')
		this._formElement = element.closest('form')
		this._formGroupElement = element.closest('.form-group')
		this._errorTipElement = this._formGroupElement.querySelector('.error-tip')
		this._errorMessages = this.setErrorMessages()
		this._validateFunctions = this.validateFunctions()
		this._triggerableFunctions.register(triggerName, () => this.validate())
		this._triggerableFunctions.register(`${triggerName}:${this._name}`, () => this.validate())
	}
	setErrorMessages() {
		return {
			empty: 'この項目は必須です。',
			nospace: 'この項目にスペースは利用できません。',
			nonumber: 'この項目に数字は利用できません。',
			nosymbol: 'この項目に記号は利用できません。',
			zenkaku: 'この項目は全角で入力してください。',
			kana: 'この項目はひらがなもしくはカタカナで入力してください。',
			hiragana: 'この項目は全角かなで入力してください。',
			katakana: 'この項目は全角カナで入力してください。',
			hankaku: 'この項目は半角で入力してください。',
			number: 'この項目は半角数字で入力してください。',
			alphabet: 'この項目は半角アルファベットで入力してください。',
			alnum: 'この項目は半角英数字で入力してください。',
			date: '日付が不正です。',
			email: 'メールアドレスが不正です。',
			url: 'URLが不正です。',
			jancode: 'JANコードが不正です。',
			mixPasswordNumber: 'パスワードには半角数字も使う必要があります。',
			mixPasswordAlphabet: 'パスワードには半角英語も使う必要があります。',
			birthDate: '誕生日が不正です。',
			confirmation: '入力内容が一致しません。',
			max1: '文字数は',
			max2: '文字以下です。',
			min1: '文字数は',
			min2: '文字以上です。',
			range1: '文字数は',
			range2: '文字以上',
			range3: '文字以下です。',
			len1: '文字数は',
			len2: '文字です。',
			file: 'ファイルが選択されていません。',
			checkboxEmpty: 'この項目は必須です',
			radioEmpty: 'この項目は必須です',
		}
	}

	/**
	 * value のセットパターンが増えた場合のためにあらかじめメソッド化
	 * @returns this._element の value 属性の値
	 */
	setValue() {
		return this._element.value
	}
	validateFunctions() {
		return {
			empty: () => {
				if (this._value == '') {
					console.log(`validate ::: ${this._name} / 'empty' is invalid`)
					const _p = document.createElement('p')
					_p.textContent = this._errorMessages['empty']
					this._errorTipElement.appendChild(_p)
					this._element.classList.add('is-invalid')
				}
			},
			multipleEmpty: () => {
				this._isMultipleEmptyValid = false
				this._multipleEmptyId = this._element.dataset.multipleEmptyId
				this._multipleEmptyElements = document.querySelectorAll(`[data-multiple-empty-id=${this._multipleEmptyId}`)
				Array.prototype.forEach.call(this._multipleEmptyElements, (element) => {
					if (element.value != '') this._isMultipleEmptyValid = true
				})
				if (!this._isMultipleEmptyValid) {
					console.log(`validate ::: ${this._name} / 'multipleEmpty' is invalid`)
					const _p = document.createElement('p')
					Array.prototype.forEach.call(this._multipleEmptyElements, (element, index) => {
						_p.textContent += index == 0 ? element.dataset.validationName : `、${element.dataset.validationName}`
						if (index == this._multipleEmptyElements.length - 1) _p.textContent += `のいずれかの入力は必須です。`
					})
					this._errorTipElement.appendChild(_p)
					this._element.classList.add('is-invalid')
				}
			},
			email: () => {
				if (
					!this._value == '' &&
					!this._value.match(
						/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
					)
				) {
					console.log(`validate ::: ${this._name} / 'email' is invalid`)
					const _p = document.createElement('p')
					_p.textContent = this._errorMessages['email']
					this._errorTipElement.appendChild(_p)
					this._element.classList.add('is-invalid')
				}
			},
			confirmation: () => {
				if (!this._value == '' && this._value != document.querySelector(this._element.dataset.confirmationBase).value) {
					console.log(`validate ::: ${this._name} / 'confirmation' is invalid`)
					const _p = document.createElement('p')
					_p.textContent = this._errorMessages['confirmation']
					this._errorTipElement.appendChild(_p)
					this._element.classList.add('is-invalid')
				}
			},
		}
	}
	async validate() {
		if (Array.prototype.includes.call(this._element.classList, 'ignore-validation')) return
		this._value = this.setValue()
		this._errorTipElement.innerHTML = ''
		await this._validations.forEach((validation) => this._validateFunctions[validation]())
		if (this._errorTipElement.innerHTML == '') this._element.classList.remove('is-invalid')
	}
}

/**
 * trigger 関数に文字列を渡すことで register によって登録された関数を実行できる。
 * 各 Validator に TriggerableFunctions の同一インスタンスを渡しているため、
 * new ValidatorInitializer() で生成したインスタンス内の this._TriggerableFunctions から
 * trigger を引くことで全 Validator に trigger を引ける。
 */
class TriggerableFunctions {
	constructor() {
		console.log(`log ::: ${this.constructor.name}.constructor`)
		this._functions = {}
	}
	register(functionName, _function) {
		console.log(`log ::: ${this.constructor.name}.register`)
		this._functions[functionName] = this._functions[functionName] || []
		this._functions[functionName].push(_function)
	}
	unregister(functionName) {
		console.log(`log ::: ${this.constructor.name}.unregister`)
		delete this._functions[functionName]
	}
	trigger(functionName) {
		console.log(`log ::: ${this.constructor.name}.trigger`)
		this._functions[functionName].forEach((_function) => _function())
	}
}
