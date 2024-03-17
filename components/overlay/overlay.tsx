import { useRef } from "react";

import { CSSTransition } from "react-transition-group";

import styles from "@/components/overlay/overlay.module.css";

interface Props {
  isVisible: boolean;
  onClick: () => void;
}

export const Overlay = ({ isVisible, onClick }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      nodeRef={divRef}
      in={isVisible}
      timeout={300}
      classNames={{
        enterActive: styles.overlayEnterActive,
        enterDone: styles.overlayEnterDone,
        exitActive: styles.overlayExitActive,
        exit: styles.overlayExit,
      }}
      unmountOnExit
    >
      <div ref={divRef} className={styles.overlay} onClick={onClick}></div>
    </CSSTransition>
  );
};
