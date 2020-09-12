import React, { useState } from 'react'
import { Container, Wrapper } from './App.styles'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'

function App() {
    const [lettuce, setLettuce] = useState()
    const colors = ['#62cbc6', '#00abad', '#00858c', '#006073', '#004d61']


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={
                    <div>produtos disponiveis

                        <Checkbox value={lettuce} title="Alface" onClick={() => setLettuce(!lettuce)} />

                    </div>

                }
                middle={
                    <div>sua lista de compras</div>
                }
                right={
                    <div>estatisticas

                        <LineChart color={colors[0]} title="Saudavel" percentage={80} />

                        <LineChart color={colors[1]} title="Não tão saudável assim" percentage={25} />

                        <LineChart color={colors[2]} title="limpeza" percentage={40} />

                        <LineChart color={colors[3]} title="outros" percentage={10} />
                    </div>
                }
            />
        </Container>
    </Wrapper>
}

export default App