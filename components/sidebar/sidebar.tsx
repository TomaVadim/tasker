"use client";
import { useRef, useState } from "react";

import { faBars, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { Overlay } from "@/components/overlay/overlay";

import styles from "@/components/sidebar/sidebar.module.css";

export const Sidebar = () => {
  const [isVisibleSidebar, setIsVisibleSidebar] = useState(false);

  const asideRef = useRef<HTMLDivElement>(null);

  const handleToggleSidebar = () => {
    setIsVisibleSidebar((prev) => !prev);
  };

  return (
    <>
      <button aria-label="Open Menu" onClick={handleToggleSidebar}>
        <FontAwesomeIcon className="text-3xl" icon={faBars} />
      </button>

      <CSSTransition
        in={isVisibleSidebar}
        nodeRef={asideRef}
        timeout={300}
        classNames={{
          enterActive: styles.sidebarEnterActive,
          enterDone: styles.sidebarEnterDone,
          exitActive: styles.sidebarExitActive,
          exit: styles.sidebarExit,
        }}
        unmountOnExit
      >
        <aside
          ref={asideRef}
          className={`${styles.sidebar} relative flex items-center justify-center px-5 bg-primary`}
        >
          <button
            className="absolute top-3 right-3"
            aria-label="Close Menu"
            onClick={handleToggleSidebar}
          >
            <FontAwesomeIcon className="text-3xl" icon={faXmark} />
          </button>

          <ul className="flex flex-col gap-3 items-center">
            <li>
              <button className="flex items-center gap-2 px-3 py-3 border rounded-md">
                <FontAwesomeIcon className="text-2xl" icon={faPlus} />
                <span>Create dashboard</span>
              </button>
            </li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </aside>
      </CSSTransition>

      <Overlay isVisible={isVisibleSidebar} onClick={handleToggleSidebar} />
    </>
  );
};
