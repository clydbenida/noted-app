// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor, BaseElement } from 'slate'
import { ReactEditor } from 'slate-react'

type ElementType = 'paragraph' | 'code'

export type ParagraphElement = {
  type: 'paragraph'
  children: CustomText[]
}

export type CodeElement = {
  type: 'code'
  children: { text: string; language: string }
}

export type CustomElement = ParagraphElement | CodeElement

export type CustomText = { text: string; bold?: true }

declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }

  interface BaseElement {
    type: string
  }
}
