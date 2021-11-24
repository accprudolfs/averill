import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// DB CALL
async function PostDbCall(whatToCall, data, rejectWithValue) {
  // Assign Method , Header And DATA
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }

  // Try To Call DB And Get Answer
  try {
    const response = await fetch(
      `http://localhost:8080/${whatToCall}`,
      requestOptions,
    )
    if (!response.ok) {
      throw new Error('Server Error!')
    }
    const data = await response.json()
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
}

// Get All Plants From Server
export const fetchPlants = createAsyncThunk(
  'MyTestReducer/fetchPlants',
  async function (data, { rejectWithValue }) {
    return PostDbCall('api/shop/getPlants', data, rejectWithValue)
  },
)

// On Error
const setError = (state, action) => {
  state.status = 'rejected'
  state.error = action.payload
}

const initialState = {
  AllPlants: [],
  status: null,
  error: null,
  // TO do , from user Reg
  money: 0,
}

export const ShopReducer = createSlice({
  name: 'MyTestReducer',
  initialState,
  reducers: {},
  extraReducers: {
    // Get All Plants
    [fetchPlants.pending]: state => {
      state.status = 'loading'
      state.error = null
    },

    [fetchPlants.rejected]: setError,

    // Get All Plants
    [fetchPlants.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.AllPlants = action.payload
    },
  },
})

export default ShopReducer.reducer
