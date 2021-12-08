export type Size = 'small' | 'medium' | 'large'
export type Color = 'blue' | 'light-blue' | 'green' | 'yellow' | 'orange' | 'red' | 'pink' | 'theme'
export type BadeProps = {
	size: Size
	color: Color
	displayText: string
	className?: string
}
