import { CustomElement } from '@renderer/types/global'

export const SHORTCUTS: Record<string, CustomElement> = {
  '*': { type: 'unordered-list', charType: '*' },
  '-': { type: 'unordered-list', charType: '-' },
  '+': { type: 'unordered-list', charType: '+' },
  '>': { type: 'blockquote' },
  '#': { type: 'heading', level: '1' },
  '##': { type: 'heading', level: '2' },
  '###': { type: 'heading', level: '3' }
}
