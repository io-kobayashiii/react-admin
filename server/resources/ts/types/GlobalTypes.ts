export type Size = 'small' | 'medium' | 'large'
export type Color = 'blue' | 'light-blue' | 'green' | 'yellow' | 'orange' | 'red' | 'pink'
export type BadeProps = {
	size: Size
	color: Color
	displayText: string
	additionalClasses?: string[]
}
