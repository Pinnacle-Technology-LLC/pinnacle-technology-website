/**
 * Smoothly scrolls to a section by ID, accounting for fixed header offset
 *
 * @param sectionId - The ID of the target section element
 *
 * @example
 * ```ts
 * scrollToSection('services')
 * ```
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

/**
 * Handles click events on section links for smooth scrolling behavior
 *
 * When on the homepage, prevents default navigation and scrolls smoothly.
 * When on other pages, allows normal navigation with hash fragments.
 *
 * @param e - React mouse event from the anchor element
 * @param sectionId - The ID of the target section
 * @param pathname - Current page pathname
 *
 * @example
 * ```tsx
 * <Link href="/#services" onClick={(e) => handleSectionLink(e, 'services', pathname)}>
 *   Services
 * </Link>
 * ```
 */
export function handleSectionLink(
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  pathname: string
) {
  if (pathname === '/') {
    e.preventDefault()
    scrollToSection(sectionId)
  }
}
