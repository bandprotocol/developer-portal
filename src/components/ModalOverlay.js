import React from 'react'
import styled from 'styled-components'
import media from 'ui/media'

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000000;
  transition: all 400ms;

  ${p =>
    !p.show &&
    `
    opacity: 0;
    pointer-events: none;
  `}
`

const Scroller = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
`

const Container = styled.div`
  position: relative;
  top: 200px;
  margin-bottom: 60px;
  min-width: 300px;

  transition: all 400ms;

  ${p =>
    p.show
      ? `
    opacity: 1;
    transform: translateY(-30px);
  `
      : `
    opacity: 0;
    transform: translateY(0);
  `}

  ${media.mobile} {
    min-width: 100%;
    width: 100%;
    top: 30px;
  }
`

export default class ModalOverlay extends React.Component {
  state = {
    show: false,
    modal: null,
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      if (this.props.children) {
        this.setState({ show: true, modal: this.props.children })
      } else {
        this.setState({ show: false })
        await new Promise(r => setTimeout(r, 500))
        this.setState({ modal: null })
      }
    }
  }

  hideModal() {
    this.props.hideModal && this.props.hideModal()
  }

  handleKeydownEvent = e => e.keyCode === 27 && this.hideModal()

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydownEvent, false)

    // Show modal if loaded by default
    if (this.props.children) {
      this.setState({ show: true, modal: this.props.children })
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydownEvent, false)
  }

  render() {
    const { style = {}, barebone } = this.props
    const { show, modal } = this.state

    return (
      <Background show={show} onClick={() => this.hideModal()}>
        <Scroller>
          <Container
            show={show}
            className={this.props.className}
            onClick={e => e.stopPropagation()}
            hideModal={this.hideModal.bind(this)}
            style={style}
            barebone={barebone}
          >
            {modal}
          </Container>
        </Scroller>
      </Background>
    )
  }
}
