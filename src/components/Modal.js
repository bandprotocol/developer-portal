import React from 'react'
import { ModalConsumer } from '../context/modal'
import ModalOverlay from './ModalOverlay'
import ApplyIdentityModal from './ApplyIdentity/ApplyIdentityModal'

export default class Modal extends React.Component {
  render() {
    return (
      <ModalConsumer>
        {({ modal = {}, setModal, hideModal }) => (
          <ModalOverlay hideModal={modal.name && hideModal}>
            {modal.name &&
              (() => {
                const { name, params } = modal
                switch (name) {
                  case 'apply/identity':
                    return (
                      <ApplyIdentityModal hideModal={hideModal} {...params} />
                    )
                  default:
                    throw Error(`Modal ${name} not found.`)
                }
              })()}
          </ModalOverlay>
        )}
      </ModalConsumer>
    )
  }
}
