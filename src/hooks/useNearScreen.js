import { useState, useEffect, useRef } from 'react'

const useNearScreen = (props = { rootMargin: '0px', threshold: 0.5, externalRef: null, once: true }) => {
  const [show, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = props.externalRef ? props.externalRef.current : fromRef.current

    const onObserver = (entries, observer) => {
      const [{ isIntersecting }] = entries
      if (isIntersecting) {
        setShow(true)
        props.once && observer.disconnect()
      } else {
        !props.once && setShow(false)
      }
    }

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onObserver, {
        rootMargin: props.rootMargin,
        threshold: props.threshold
      })

      if (element) observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return {
    isNearScreen: show,
    fromRef
  }
}

export default useNearScreen
