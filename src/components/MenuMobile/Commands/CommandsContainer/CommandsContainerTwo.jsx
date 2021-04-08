import React from 'react'
import PropTypes from 'prop-types'
import CommandsBtnBlue from '../Btns/CommandsBtnBlue'

export default function CommandsContainerTwo({ handlePushView }) {
  return (
    <>
      <h1 className='CommandsContainer__content__title'>
        Como crear un repositorio:
      </h1>
      <div className='CommandsContainer__content__flex'>
        <CommandsBtnBlue
          btnText='Github'
          route='github'
          handlePushView={handlePushView}
        />

        <CommandsBtnBlue
          handlePushView={handlePushView}
          route='gitlab'
          btnText='Gitlab'
        />
      </div>
    </>
  )
}

CommandsContainerTwo.propTypes = {
  handlePushView: PropTypes.func.isRequired
}
