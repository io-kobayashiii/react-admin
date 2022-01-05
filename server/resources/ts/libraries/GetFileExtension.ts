export const GetFileExtension = (fileName: string) => {
	const splittedFileName = fileName.split('.')
	return splittedFileName[splittedFileName.length - 1]
}
