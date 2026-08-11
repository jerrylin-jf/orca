import { describe, expect, it } from 'vitest'
import { OPEN_IN_APP_ICON_IDS } from '../../../shared/open-in-app-icons'
import { getOpenInAppIconGlyph, getOpenInAppIconOptions } from './open-in-app-icon-set'

describe('open-in app icon set', () => {
  it('offers every persisted icon id with a glyph and a label', () => {
    const options = getOpenInAppIconOptions()

    expect(options.map((option) => option.id)).toEqual([...OPEN_IN_APP_ICON_IDS])
    for (const option of options) {
      expect(option.label.trim()).not.toBe('')
      expect(getOpenInAppIconGlyph(option.id)).toBe(option.icon)
    }
  })

  it('maps each id to a distinct glyph', () => {
    const glyphs = new Set(OPEN_IN_APP_ICON_IDS.map((id) => getOpenInAppIconGlyph(id)))

    expect(glyphs.size).toBe(OPEN_IN_APP_ICON_IDS.length)
  })
})
