export type HeadingLevel = '0' | '1' | '2' | '3'

export type CustomText = { text: string; bold?: true }

export type ParagraphElement = {
  type: 'paragraph'
  children?: CustomText[]
}

export type HeadingElement = {
  type: 'heading'
  level: HeadingLevel
  children?: HeadingText[]
}

export type HeadingText = { text?: string; bold: true }

export type CodeElement = {
  type: 'code'
  children: { text: string; language: string }
}

export type OrderedListElement = {
  type: 'ordered-list'
  start?: number
  charType?: 'alphabet' | 'numbers'
  children?: ListChildren[]
}

export type UnorderedListElement = {
  type: 'unordered-list'
  charType?: '*' | '-' | '+'
  children?: ListChildren[]
}

export type ListChildren = {
  text: string
}

export type BlockQuoteElement = {
  type: 'blockquote'
  children?: CustomText[]
}
