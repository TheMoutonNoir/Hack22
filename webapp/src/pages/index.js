import React from 'react'
import { useState } from 'react';
import Header from 'components/Header'
import Choice from 'components/Choice.js'

export default () => {
  return (
  <div style={{ textAlign: 'center' }}>
    <Header></Header>
    <Choice></Choice>
  </div>
)
}
