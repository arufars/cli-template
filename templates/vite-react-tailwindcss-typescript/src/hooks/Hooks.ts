import { useState } from 'react';


// Hooks share state between components.
/**
 * @description useState is a hook that lets you add state to your component.
 * @example
   const [count, setCount] = useState(0);
   return (
     count,
     setCount
 * )
    const { count } = usebetwen(useShareState)
 */
export const useShareState = () => {
    const [showAudio, setShowAudio] = useState<boolean>(false)
  
    return {
      showAudio,
      setShowAudio,
    }
  }