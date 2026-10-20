import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Load user from localStorage on app start
const loadUserFromStorage = () => {
  try {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  user: loadUserFromStorage(),
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
   resetEmail: "",
   resetOtp: "",
};

// Simple local registration without API
export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkAPI) => {
    try {
      // Simulate loading
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const userExists = existingUsers.find(user => user.email === userData.email);
      
      if (userExists) {
        return thunkAPI.rejectWithValue('User with this email already exists!');
      }
      
      // Create new user
      const newUser = {
        _id: 'user_' + Date.now(),
        firstName: userData.firstName,
        secondName: userData.secondName,
        email: userData.email,
        token: 'token_' + Math.random().toString(36).substr(2),
        createdAt: new Date().toISOString(),
      };
      
      // Store in users list
      existingUsers.push({ ...newUser, password: userData.password });
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Store current user
      localStorage.setItem('user', JSON.stringify(newUser));
      
      return newUser;
    } catch (error) {
      return thunkAPI.rejectWithValue('Registration failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      // Fake loading
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get all registered users
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Find matching user
      const user = users.find(
        (item) =>
          item.email === userData.email &&
          item.password === userData.password
      );

      if (!user) {
        return thunkAPI.rejectWithValue("Invalid Email or Password");
      }

      // Remove password before saving current user
      const loggedInUser = {
        _id: user._id,
        firstName: user.firstName,
        secondName: user.secondName,
        email: user.email,
        token: user.token,
      };

      localStorage.setItem("user", JSON.stringify(loggedInUser));

      return loggedInUser;
    } catch (error) {
      return thunkAPI.rejectWithValue("Login Failed");
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    setResetEmail: (state, action) => {
  state.resetEmail = action.payload;
},
setResetOtp: (state, action) => {
  state.resetOtp = action.payload;
},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.message = '';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = 'Registration successful!';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(loginUser.pending, (state) => {
  state.isLoading = true;
  state.isError = false;
  state.isSuccess = false;
  state.message = "";
})

.addCase(loginUser.fulfilled, (state, action) => {
  state.isLoading = false;
  state.isSuccess = true;
  state.user = action.payload;
  state.message = "Login Successful";
})

.addCase(loginUser.rejected, (state, action) => {
  state.isLoading = false;
  state.isError = true;
  state.message = action.payload;
});

  },
});


export const {
  reset,
  logout,
  setResetEmail,
    setResetOtp,
} = authSlice.actions;

export const selectResetOtp = (state) => state.auth.resetOtp;
export const selectResetEmail = (state) => state.auth.resetEmail;
export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsError = (state) => state.auth.isError;
export const selectIsSuccess = (state) => state.auth.isSuccess;
export const selectMessage = (state) => state.auth.message;
export default authSlice.reducer;