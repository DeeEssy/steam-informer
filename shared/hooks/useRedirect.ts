import type { RouteLocation, RouteLocationRaw } from '#vue-router'
import type { NavigateToOptions } from '#app/composables/router'

export function useRedirect(location: RouteLocationRaw, options: NavigateToOptions = {}) {
  const { $localePath } = useNuxtApp()

  return navigateTo($localePath(location as RouteLocation), options)
}
