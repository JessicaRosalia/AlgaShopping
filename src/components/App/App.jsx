import React from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'

function App() {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={
                    <div style={{ backgroundColor: 'red' }}>produtos disponiveis</div>
                }
                middle={
                    <div style={{ backgroundColor: 'red' }}>sua lista de compras</div>
                }
                right={
                    <div style={{ backgroundColor: 'blue' }}>estatisticas</div>
                }
            />
        </Container>
    </Wrapper>
}

export default App