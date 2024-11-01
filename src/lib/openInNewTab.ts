

export const openInNewTab = (url: string) => {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    a.click()
}