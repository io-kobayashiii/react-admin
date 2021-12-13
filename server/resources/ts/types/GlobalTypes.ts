export type Size = 'small' | 'medium' | 'large'
export type Color = 'blue' | 'light-blue' | 'green' | 'yellow' | 'orange' | 'red' | 'pink' | 'theme'
export type BadeProps = {
	size: Size
	color: Color
	displayText: string
	className?: string
}
export type Item = {
	id: string | number
	main_image: {
		src: string
		alt?: string
	}
	name: string
	code: string | number
	key_1: string | number
	key_2: string | number
	key_3: string | number
	group_code: string | number
	division_code_1: string | number
	division_code_2: string | number
	division_code_3: string | number
	manufacturer: string
	standard: string | number
	sales_unit: string | number
	files: {
		eps: {
			id: string
			name: string
			src: string
		}[]
		jpg: {
			id: string
			name: string
			src: string
		}[]
	}
	registered_date: string
	last_download_date: string
	comments_1: string
	comments_2: string
	comments_3: string
	comments_4: string
	comments_5: string
	note?: string
	download_count: number
}
