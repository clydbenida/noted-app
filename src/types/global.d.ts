// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import {
  CodeElement,
  CustomText,
  HeadingElement,
  ParagraphElement,
  OrderedListElement,
  UnorderedListElement,
  BlockQuoteElement
} from './ElementTypes'

export type CustomElement =
  | ParagraphElement
  | CodeElement
  | HeadingElement
  | OrderedListElement
  | UnorderedListElement
  | BlockQuoteElement

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
