import React from 'react';
import './Modal.scss'

export default function Modal ({active, setActive}) {
  return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
      <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
        asd
      </div>
    </div>
  )
}
