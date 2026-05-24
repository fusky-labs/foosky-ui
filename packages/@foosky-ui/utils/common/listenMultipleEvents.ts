interface ListenMultiEventOptions {
  /** Call the function immediately upon initialization */
  callOnInit?: boolean
}

// biome-ignore format: readability
export const listenMultipleEvents = <T extends Element | Window, Callback extends (e?: Event) => void>(
  target: T,
  definedEvents: string[],
  callback: Callback,
  options?: ListenMultiEventOptions,
) => {
  // biome-ignore format: readability
  if (Array.isArray(definedEvents) && definedEvents.some((e) => typeof e !== "string")) {
    return
  }

  if (options?.callOnInit) callback()

  for (const event of definedEvents) {
    target.addEventListener(event, callback)
  }
}
