import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "data/getData",
  async (country: string) => {
    const response = await axios.get(
      `https://covid19.mathdro.id/api${
        country != "Global" ? `/countries/${country}` : ""
      }`
    );
    console.log(response.data);
    return response.data;
  }
);

export const getCountries = createAsyncThunk("data/getCountries", async () => {
  const response = await axios.get("https://covid19.mathdro.id/api/countries");
  return response.data;
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    stats: <any[]>[],
    lastUpdate: "",
    countries: <any[]>[],
    currentCountry: "Global",
  },
  reducers: {
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      const { confirmed, recovered, deaths } = action.payload;
      const active = confirmed.value - recovered.value - deaths.value;
      state.lastUpdate = action.payload.lastUpdate;
      state.stats = [
        {
          title: "Infected",
          description: "Number of infect cases of COVID-19",
          color: "blue",
          ...confirmed,
        },
        {
          title: "Recovered",
          description: "Number of recoveries from COVID-19",
          color: "green",
          ...recovered,
        },
        {
          title: "Deaths",
          description: "Number of deaths caused by COVID-19",
          color: "red",
          ...deaths,
        },
        {
          title: "Active",
          description: "Number of active cases of COVID-19",
          color: "orange",
          value: active,
        },
      ];
    }),
      builder.addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload.countries;
      });
  },
});

export const { setCurrentCountry } = dataSlice.actions;

export default dataSlice.reducer;
