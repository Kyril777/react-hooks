// The usePortal hook is useful for features that need a show/hide component.
import type { ReactPortal, ReactNode } from "react";

import { useEffect, useMemo } from "react";
import { createPortal} from "react-dom";

const usePortal = () => {
  // Crerate only one instance of a div.
  const wrapper = useMemo(() => document.createElement("div", []))

  useEffect(() => {
    document.body.appendChild(wrapper)

    return () => {
      document.body.removeChild(wrapper)
    }
  }, [])

  return {
    render: (children: ReactNode): ReactPortal | null => createPortal(children, wrapper),
  }
}

export { userPortal }
