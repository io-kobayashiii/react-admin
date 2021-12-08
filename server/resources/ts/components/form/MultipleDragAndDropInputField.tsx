import * as React from 'react'
import Dividers from '../common/Dividers'
import Divider from '../common/Divider'

type _Props = {
	id: string
	name: string
	format: 'image' | 'csv' | 'pdf'
	className?: string
}

const MultipleDragAndDropInputField = ({ id, name, format, className }: _Props): JSX.Element => {
	const [isSelected, setIsSelected] = React.useState(false)
	const [validationState, setValidationState] = React.useState(false)
	const [isDragOver, setIsDragOver] = React.useState(false)
	const inputElem = React.useRef<any>()
	const unselectedTextElem = React.useRef<any>()
	const selectedTextElem = React.useRef<any>()
	const dataTransfer = new DataTransfer()
	const getAcceptFormat = () => {
		switch (format) {
			case 'image':
				return 'image/*'
			default:
				return `.${format}`
		}
	}
	/* @ts-ignore */
	const onChange = (e) => {
		console.log('log ::: onChange ::: DragAndDropInputField')
		e.stopPropagation()
		e.preventDefault()
		setIsDragOver(false)
	}
	/* @ts-ignore */
	const onDrop = (e: any) => {
		console.log('log ::: onDrop ::: DragAndDropInputField')
		e.stopPropagation()
		e.preventDefault()
		Array.prototype.forEach.call(e.dataTransfer.files, (file) => {
			selectedTextElem.current.innerHTML += `<p>${file.name}</p>`
			dataTransfer.items.add(file)
		})
		inputElem.current.files = dataTransfer.files
		console.log(inputElem.current.files)
		setIsDragOver(false)
		setIsSelected(true)
		setValidationState(true)
	}
	/* @ts-ignore */
	const onDragOver = (e) => {
		console.log('log ::: onDragOver ::: DragAndDropInputField')
		e.stopPropagation()
		e.preventDefault()
		setIsDragOver(true)
	}
	/* @ts-ignore */
	const onDragLeave = (e) => {
		console.log('log ::: onDragLeave ::: DragAndDropInputField')
		e.stopPropagation()
		e.preventDefault()
		setIsDragOver(false)
	}
	return (
		<div
			className={`${className ? className : ''} ${
				isDragOver ? 'bg-gray-200' : 'bg-gray-100'
			} rounded-8 hover:bg-gray-200 transition-all duration-300 text-14`}
		>
			<label htmlFor={id} className={`block w-100p p-16 hover:cursor-pointer`} onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
				<Dividers>
					<Divider base={6} className={`flex justify-center items-center`}>
						<p className={`text-center pr-16`}>
							ドラッグ＆ドロップ
							<br />
							または選択
						</p>
					</Divider>
					<Divider base={10} className={`pl-16 flex items-center border-l border-gray-300`}>
						<p ref={unselectedTextElem} className={`${isSelected ? 'hidden' : ''} w-100p text-center text-gray-400`}>
							ファイルが選択されていません
						</p>
						<div ref={selectedTextElem} className={`${isSelected ? '' : 'hidden'} text-gray-400`}></div>
					</Divider>
				</Dividers>
			</label>
			<input
				ref={inputElem}
				type='file'
				id={id}
				name={name}
				className={`hidden`}
				accept={getAcceptFormat()}
				multiple={true}
				data-validation={true}
				data-validation-type={'file'}
				data-validation-state={validationState}
			/>
		</div>
	)
}

export default MultipleDragAndDropInputField
