import React from 'react'
import { Wrapper, ProgressBar } from './LineChart.styles'
import { findAllByTitle } from '@testing-library/react'

function LineChart({ title, percentage, color }) {
    return <Wrapper>
        <span>
            {title}:

        </span>
        <ProgressBar color={color} percentage={percentage} />
    </Wrapper>
}

export default LineChart