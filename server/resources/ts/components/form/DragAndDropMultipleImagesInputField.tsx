import * as React from 'react'
import { FiUpload } from 'react-icons/fi'
import { GetFileExtension } from '../../libraries/GetFileExtension'
import Divider from '../common/Divider'
import Dividers from '../common/Dividers'

type _Props = {
	id: string
	name: string
	format: 'jpg' | 'eps'
	className?: string
}

const MultipleImagesDragAndDropInputField = ({ id, name, format, className }: _Props): JSX.Element => {
	const [isSelected, setIsSelected] = React.useState(false)
	const [isDragOver, setIsDragOver] = React.useState(false)
	const inputElem = React.useRef<any>()
	const inputForDataTransfer = React.useRef<any>()
	const unselectedTextElem = React.useRef<any>()
	const selectedTextElem = React.useRef<any>()
	const onChange = (e: any) => {
		e.stopPropagation()
		e.preventDefault()
		const _dataTransfer = new DataTransfer()
		Array.prototype.forEach.call(inputForDataTransfer.current.files, (file) => {
			_dataTransfer.items.add(file)
		})
		Array.prototype.forEach.call(inputElem.current.files, (file) => {
			_dataTransfer.items.add(file)
		})
		inputElem.current.files = _dataTransfer.files
		inputForDataTransfer.current.files = _dataTransfer.files
		setIsDragOver(false)
	}
	const onDrop = (e: any) => {
		e.stopPropagation()
		e.preventDefault()
		const _dataTransfer = new DataTransfer()
		Array.prototype.forEach.call(inputElem.current.files, (file) => {
			if (GetFileExtension(file.name) == (format as string)) _dataTransfer.items.add(file)
		})
		Array.prototype.forEach.call(e.dataTransfer.files, (file) => {
			if (GetFileExtension(file.name) == (format as string)) _dataTransfer.items.add(file)
			selectedTextElem.current.innerHTML += `<p>${file.name}</p>`
		})
		inputElem.current.files = _dataTransfer.files
		inputForDataTransfer.current.files = _dataTransfer.files
		setIsSelected(true)
		setIsDragOver(false)
	}
	/* @ts-ignore */
	const onDragOver = (e) => {
		e.stopPropagation()
		e.preventDefault()
		setIsDragOver(true)
	}
	/* @ts-ignore */
	const previewFile = (file) => {
		console.log('FormFileDropOnImageManagementView.previewFile')
		let _fileReader = new FileReader()
		_fileReader.readAsDataURL(file)
		_fileReader.onload = () => {
			let img = document.createElement('img')
			// const $img = $(img)
			// $img.attr('src', _fileReader.result)
			// $img.css({
			// 	width: '100%',
			// 	height: '100%',
			// 	'object-fit': 'contain',
			// })
		}
	}
	/* @ts-ignore */
	const onDragLeave = (e) => {
		e.stopPropagation()
		e.preventDefault()
		setIsDragOver(false)
	}
	return (
		<div
			className={`${className ? className : ''} ${
				isDragOver ? 'bg-gray-200' : 'bg-gray-100'
			} rounded-8 border border-gray-200 hover:bg-gray-200 transition-all duration-300 text-14`}
		>
			<label
				htmlFor={id}
				className={`block w-100p p-15 hover:cursor-pointer relative flex justify-center items-center`}
				onDragOver={onDragOver}
				onDragLeave={onDragLeave}
				onDrop={onDrop}
			>
				<Dividers className='w-100p h-100p items-center'>
					<Divider base={6} className='h-100p flex justify-center items-center'>
						<p ref={unselectedTextElem} className={`w-100p text-center text-14 relative`}>
							<span>
								ファイルをドラッグ＆ドロップ
								<br />
								またはクリックして選択
							</span>
						</p>
					</Divider>
					<Divider base={6}>
						<p ref={unselectedTextElem} className={`${isSelected ? 'hidden' : ''} w-100p text-center text-gray-400 border-l border-gray-200`}>
							ファイルが選択されていません
						</p>
						<div ref={selectedTextElem} className={`${isSelected ? '' : 'hidden'} text-gray-400 border-l border-gray-200 pl-30`}></div>
					</Divider>
				</Dividers>
			</label>
			<input ref={inputElem} type='file' id={id} name={name} className={`hidden`} onChange={onChange} accept={format} multiple={true} />
			<input ref={inputForDataTransfer} type='file' className={`hidden`} multiple={true} />
		</div>
	)
}

export default MultipleImagesDragAndDropInputField
