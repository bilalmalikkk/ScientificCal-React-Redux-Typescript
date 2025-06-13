// src/features/opSlice.ts
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { evaluate } from 'mathjs'

interface CalculatorState {
  expression: string
  result: string
}

const initialState: CalculatorState = {
  expression: '',
  result: '0',
}

const calSlice = createSlice({
  name: 'Calculator',
  initialState,
  reducers: {
    append: (state, action: PayloadAction<string>) => {
      state.expression += action.payload
    },
    clear: (state) => {
      state.expression = ''
      state.result = '0'
    },
    deleteLast: (state) => {
      state.expression = state.expression.slice(0, -1)
    },
    evaluateExpr: (state) => {
      try {
        // Evaluate using mathjs
        const evalResult = evaluate(state.expression)
        state.result = evalResult.toString()
      } catch (e) {
        state.result = 'Error'
      }
    },
  }
})

export const { append, clear, deleteLast, evaluateExpr } = calSlice.actions
export default calSlice.reducer
