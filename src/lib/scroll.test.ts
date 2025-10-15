import { describe, it, expect, beforeEach, vi } from 'vitest'
import { scrollToSection, handleSectionLink } from './scroll'

describe('scroll utilities', () => {
  beforeEach(() => {
    // Reset DOM for each test
    document.body.innerHTML = ''
    window.scrollTo = vi.fn()
  })

  describe('scrollToSection', () => {
    it('scrolls to element when found', () => {
      const element = document.createElement('div')
      element.id = 'test-section'
      document.body.appendChild(element)

      const getBoundingClientRect = vi.fn(() => ({
        top: 100,
        bottom: 200,
        left: 0,
        right: 0,
        width: 0,
        height: 100,
        x: 0,
        y: 100,
        toJSON: () => {},
      }))
      element.getBoundingClientRect = getBoundingClientRect

      scrollToSection('test-section')

      expect(window.scrollTo).toHaveBeenCalledWith({
        top: expect.any(Number),
        behavior: 'smooth',
      })
    })

    it('does nothing when element not found', () => {
      scrollToSection('non-existent')
      expect(window.scrollTo).not.toHaveBeenCalled()
    })
  })

  describe('handleSectionLink', () => {
    it('prevents default and scrolls on homepage', () => {
      const element = document.createElement('div')
      element.id = 'test-section'
      document.body.appendChild(element)

      const mockEvent = {
        preventDefault: vi.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>

      const getBoundingClientRect = vi.fn(() => ({
        top: 100,
        bottom: 200,
        left: 0,
        right: 0,
        width: 0,
        height: 100,
        x: 0,
        y: 100,
        toJSON: () => {},
      }))
      element.getBoundingClientRect = getBoundingClientRect

      handleSectionLink(mockEvent, 'test-section', '/')

      expect(mockEvent.preventDefault).toHaveBeenCalled()
    })

    it('does not prevent default when not on homepage', () => {
      const mockEvent = {
        preventDefault: vi.fn(),
      } as unknown as React.MouseEvent<HTMLAnchorElement>

      handleSectionLink(mockEvent, 'test-section', '/about')

      expect(mockEvent.preventDefault).not.toHaveBeenCalled()
    })
  })
})
